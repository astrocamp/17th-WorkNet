from django.contrib import messages
from django.contrib.auth import authenticate, login, logout, user_logged_in
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse
from django.utils import timezone

from apps.users.models import User

from .forms import CustomUserCreationForm, UserInfoForm
from .models import UserInfo


def home(request):
    return render(request, "users/home.html")


def index(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password1")
            # 登入用戶
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, "註冊成功並已登入")
                return redirect("users:index")
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
            if user.user_type is None or user.user_type == "":
                return redirect("users:identity")
            messages.success(request, "登入成功")
            if next_url:
                return redirect(next_url)

            return redirect("users:index")
        else:
            messages.error(request, "登入失敗")
            return redirect("users:sign_in")

    return render(request, "users/sign_in.html")


def sign_out(request):
    if request.method == "POST":
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

    # 若該 user 沒有對應的 userinfo 需產生對應的資料表
    info, _ = UserInfo.objects.get_or_create(user_id=id)
    form = UserInfoForm(instance=info)

    return render(request, "users/info.html", {"form": form, "info": info})


# Line 登入後將 id 寫進 social_userid, 名稱寫進 username
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


@receiver(post_save, sender=User)
def create_user_info(sender, instance, created, **kwargs):
    if created:
        # 當 User 被創建時，創建一個對應的 UserInfo
        UserInfo.objects.create(user=instance)


def identity_selection(request):
    return render(request, "users/identity_selection.html")
