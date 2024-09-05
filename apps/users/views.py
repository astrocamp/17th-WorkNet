import random
import string

import requests
from django.conf import settings
from django.contrib import messages
from django.contrib.auth import authenticate, get_user_model, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse
from django.utils import timezone
from django.views import View
from django.views.decorators.http import require_POST
from django.views.generic.base import TemplateView

from apps.jobs.models import Job, JobFavorite
from apps.posts.models import Post
from apps.users.models import User

from .forms import CustomUserCreationForm, UserInfoForm
from .forms.users_form import PasswordResetForm
from .models import UserInfo


class PasswordResetView(View):
    def get(self, request):
        form = PasswordResetForm()
        return render(request, "users/password_reset.html", {"form": form})

    def post(self, request):
        form = PasswordResetForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get("username")
            email = form.cleaned_data.get("email")
            User = get_user_model()

            try:
                user = User.objects.get(username=username, email=email)
            except User.DoesNotExist:
                form.add_error(None, "此帳號與電子郵件不匹配")
                return render(request, "users/password_reset.html", {"form": form})

            new_password = "".join(random.choices(string.digits, k=6))
            user.set_password(new_password)
            user.save()

            self.send_reset_email(user.email, new_password)

            return redirect(reverse("users:password_reset_done"))
        return render(request, "users/password_reset.html", {"form": form})

    def send_reset_email(self, to_email, new_password):
        return requests.post(
            settings.MAILGUN_API_URL,
            auth=("api", settings.MAILGUN_API_KEY),
            data={
                "from": settings.EMAIL_FROM,
                "to": [to_email],
                "subject": "重置密碼",
                "text": f"您的新密碼為：{new_password}",
            },
        )


class PasswordResetDoneView(TemplateView):
    template_name = "users/password_reset_done.html"


def home(request):
    return render(request, "users/home.html")


def index(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()

            if user is not None:
                login(request, user)
                messages.success(request, "註冊成功並已登入")
                if user.type == 1:
                    return redirect("users:info", user.id)
                else:
                    return redirect("companies:index")
            else:
                messages.error(request, "登入失敗")
                return redirect("users:sign_in")
        else:
            return render(request, "users/register.html", {"form": form})
    return render(request, "users/home.html")


def register(request):
    form = CustomUserCreationForm()
    return render(request, "users/register.html", {"form": form})


def sign_in(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        next_url = request.POST.get("next")

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, "登入成功")
            if next_url:
                return redirect(next_url)

            return redirect("users:index")
        else:
            messages.error(request, "登入失敗")
            return redirect("users:sign_in")

    return render(request, "users/sign_in.html")


@require_POST
def sign_out(request):
    logout(request)
    messages.success(request, "登出成功")
    return redirect("users:index")


def info(request, id):

    if request.method == "POST":
        info = get_object_or_404(UserInfo, user_id=id, user=request.user)

        form = UserInfoForm(request.POST, instance=info)
        if form.is_valid():
            form.save()
            messages.success(request, "更新成功")
            return redirect("users:info", info.user_id)
        else:
            return render(request, "users/info.html", {"form": form, "info": info})

    info, _ = UserInfo.objects.get_or_create(user_id=id)
    form = UserInfoForm(instance=info)

    return render(request, "users/info.html", {"form": form, "info": info})


def line_save_profile(backend, user, response, *args, **kwargs):

    if backend.name == "line":
        social_id = response["userId"]
        try:
            u1 = User.objects.get(username=social_id)
        except User.DoesNotExist:
            u1 = None

        if u1:
            u1.social_userid = social_id
            u1.username = response["displayName"]
            u1.save()


@login_required
def login_redirect(request):
    user = request.user
    if user.type == 1:
        return redirect("users:info", user.id)
    else:
        return redirect("companies:index")


@login_required
def favorite(request, id):
    job = get_object_or_404(Job, pk=id)
    user = request.user

    if not JobFavorite.objects.filter(user=user, job=job).exists():
        JobFavorite.objects.create(user=user, job=job, favorited_at=timezone.now())
        return redirect("jobs:index")
    else:
        return redirect("jobs:index")


@login_required
def favorites_list(request):
    user = request.user
    favorites = JobFavorite.objects.filter(user=user).order_by("-favorited_at")
    return render(request, "users/favorites.html", {"favorites": favorites})


@login_required
def favorites_delete(request, id):
    favorite = get_object_or_404(JobFavorite, pk=id)
    # 驗證是否為該用戶的收藏
    if favorite.user != request.user:
        # 若不是則返回收藏列表
        return redirect("users:favorites_list")

    favorite.delete()
    return redirect("users:favorites_list")

def record(request, id):
    info = get_object_or_404(UserInfo, user_id=id, user=request.user)
    posts = Post.objects.filter(user=request.user).order_by("-created_at")
    return render(request, "users/record.html", {"posts": posts, "info": info})