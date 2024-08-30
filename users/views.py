from django.contrib.auth import logout
from django.shortcuts import redirect, render

# Create your views here.


# Create your views here.
def index(req):
    return render(req, "index.html")


def register(req):
    return render(req, "register.html")


def sign_in(request):
    return render(request, "sign_in.html")


def log_out(request):
    if request.method == "POST":
        logout(request)
        return redirect("pages:home")
