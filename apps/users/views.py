from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect, render
from django.urls import reverse
from apps.users.models import User
from .forms import CustomUserCreationForm


def home(request):
    return render(request, "users/home.html")

def index(request):
    return render(request, "users/home.html")
    

def register(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)

        if form.is_valid():
            user = form.save()  
            login(request, user) 
            messages.success(request, "註冊成功，已自動登入")
            return redirect("users:index")  
        else:
            return render(request, "users/register.html", {"form": form})

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


def sign_out(request):
    if request.method == "POST":
        logout(request)
        messages.success(request, "登出成功")
        return redirect("users:index")


def line_save_profile(backend, user, response, *args, **kwargs):

    social_id = response["userId"]

    if backend.name == "line":
        try:
            u1 = User.objects.get(username=social_id)
        except User.DoesNotExist:
            u1 = None

        if u1:
            u1.social_userid = social_id
            u1.username = response["displayName"]
            u1.save()
