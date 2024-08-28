from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import redirect, render
from django.urls import reverse


def home(req):
    return render(req, "users/home.html")


def index(req):
    if req.method == "POST":
        form = UserCreationForm(req.POST)
        if form.is_valid():
            form.save()
            messages.success(req, "註冊成功")
            return redirect("users:index")
        else:
            return render(req, "users/register.html", {"form": form})
    return render(req, "users/home.html")


def register(req):
    form = UserCreationForm()
    return render(req, "users/register.html", {"form": form})


def sign_in(req):
    if req.method == "POST":
        username = req.POST.get("username")
        password = req.POST.get("password")
        next_url = req.POST.get("next")

        user = authenticate(username=username, password=password)

        if user is not None:
            login(req, user)

            messages.success(req, "登入成功")
            if next_url:
                return redirect(next_url)

            return redirect("users:index")
        else:
            messages.error(req, "登入失敗")
            return redirect("users:sign_in")

    return render(req, "users/sign_in.html")


def sign_out(req):
    if req.method == "POST":
        logout(req)
        messages.success(req, "登出成功")
        return redirect("users:index")
