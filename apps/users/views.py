import json
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
from social_core.exceptions import AuthCanceled
from social_django.views import complete

from apps.companies.models import CompanyFavorite
from apps.jobs.models import Job, Job_Resume, JobFavorite
from apps.resumes.models import Resume
from lib.models.rule_required import rule_required
from lib.utils.models.decorators import login_redirect_next

from .forms import CustomUserCreationForm, UserInfoForm
from .forms.users_form import PasswordResetForm
from .models import UserInfo


def home(request):
    return render(request, "users/home.html")


def index(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()

            if user is not None:
                backend = "django.contrib.auth.backends.ModelBackend"

                login(request, user, backend=backend)
                messages.success(request, "註冊成功並已登入")
                if user.type == 1:
                    return redirect("users:info")
                else:
                    return redirect("companies:new")
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
    if request.user.is_authenticated:
        messages.error(request, "您已登入，請先登出")
        return redirect("users:index")

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        next_url = request.POST.get("next")

        user = authenticate(username=username, password=password)

        if user is not None:
            backend = "django.contrib.auth.backends.ModelBackend"
            login(request, user, backend=backend)
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


@rule_required("user_can_view")
def info(request):
    info, created = UserInfo.objects.get_or_create(user_id=request.user.id)
    if created:
        info.nickname = request.user.username
        info.save()

    if request.method == "POST":
        info = get_object_or_404(UserInfo, user_id=request.user.id)

        form = UserInfoForm(request.POST, instance=info)

        if form.is_valid():
            info_form = form.save(commit=False)
            tags = request.POST.get("tags")

            if tags:
                tags = [tag["value"] for tag in json.loads(tags)]
                info.tags.set(tags, clear=False)
            info_form.save()
            messages.success(request, "更新成功")
            return redirect("users:info")
        else:
            tags = request.POST.get("tags", [])
            tags = (
                json.loads(tags)
                if tags
                else list(info.tags.values_list("name", flat=True))
            )
    else:
        form = UserInfoForm(instance=info)
        tags = list(info.tags.values_list("name", flat=True))

    return render(
        request, "users/info.html", {"form": form, "info": info, "tags": tags}
    )


def social_save_profile(backend, user, response, *args, **kwargs):
    request = kwargs.get("request")

    match backend.name:
        case "line":
            social_id = response["userId"]
            try:
                u1 = User.objects.get(username=social_id)
            except User.DoesNotExist:
                u1 = None

            if u1:
                u1.social_userid = social_id
                u1.username = response["displayName"]
                u1.save()
        case _:
            pass
    backend_str = f"{backend.__module__}.{backend.__class__.__name__}"
    user.backend = backend_str
    login(request, user, backend=backend_str)
    user_info = UserInfo.objects.filter(user=user).first()
    if not user_info or not user_info.nickname:
        return redirect("users:info")
    return redirect("/")


def social_auth_complete(request, *args, **kwargs):
    try:
        return complete(request, *args, **kwargs)
    except AuthCanceled:
        messages.error(request, "認證失敗，請重新登入")
        return redirect("users:sign_in")


@login_required
def login_redirect(request):
    user = request.user
    if user.type == 1:  # 1為個人用戶
        return redirect("users:info")
    else:
        return redirect("companies:index")


@login_redirect_next
def favorite(request, id):
    job = get_object_or_404(Job, pk=id)
    user = request.user

    if JobFavorite.objects.filter(user=user, job=job).exists():
        JobFavorite.objects.filter(user=user, job=job).delete()
        messages.success(request, "取消收藏成功")
        return redirect("jobs:index")
    else:
        JobFavorite.objects.create(user=user, job=job, favorited_at=timezone.now())
        messages.success(request, "收藏成功")
        return redirect("jobs:index")


@login_redirect_next
def favorites_list(request):
    user = request.user
    favorites = JobFavorite.objects.filter(user=user).order_by("-favorited_at")
    return render(request, "users/favorites.html", {"favorites": favorites})


@login_redirect_next
def favorites_delete(request, id):
    favorite = get_object_or_404(JobFavorite, pk=id)

    if favorite.user != request.user:

        return redirect("users:favorites_list")

    favorite.delete()
    return redirect("users:favorites_list")


@login_required
def apply_jobs(request, job_id):
    job = get_object_or_404(Job, id=job_id)
    resumes = Resume.objects.filter(userinfo__user=request.user)
    return render(request, "users/apply.html", {"job": job, "resumes": resumes})


@require_POST
@login_required
def submit_jobs(request, job_id):
    job_id = request.POST.get("job_id")
    resume_id = request.POST.get("resume_id")
    job = get_object_or_404(Job, id=job_id)
    resume = Resume.objects.filter(id=resume_id, userinfo__user=request.user).first()

    if resume is None:
        messages.error(request, "請先新增履歷")
        return redirect("resumes:index")

    if Job_Resume.objects.filter(job=job, resume=resume).exists():
        messages.error(request, "已投遞過這個工作，請等候業者審核等候通知，謝謝")
        return redirect("jobs:index")

    else:
        Job_Resume.objects.create(job=job, resume=resume, status="applied")
        messages.success(request, "投遞成功")
        return redirect("jobs:index")


@login_required
def favorite_company_list(request):
    user = request.user
    favorites = user.favorite_companies.order_by("-favorited_at")
    return render(request, "users/favorite_company.html", {"favorites": favorites})


@login_required
def favorite_company_delete(request, id):
    favorite_company = get_object_or_404(CompanyFavorite, pk=id)
    favorite_company.delete()
    return redirect("users:favorites_company_list")


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
