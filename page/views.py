from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from apps.users.models import User


def index(req):
    return render(req, "index.html")


def sign_in(req):
    if req.method == "POST":
        username = req.POST["username"]
        password = req.POST["password"]
        user = authenticate(username=username, password=password)

        if user is not None:
            login(req, user)
            return redirect("page:root")
        else:
            return redirect("page:sign_in")
    return render(req, "index.html")


def sign_out(req):
    if req.method == "POST":
        logout(req)
        return redirect("page:root")


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

    pass
