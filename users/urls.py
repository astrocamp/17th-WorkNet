from django.contrib import admin
from django.urls import include, path

from . import views

app_name = "users"

urlpatterns = [
    path("", views.index, name="index"),
    path("register/", views.register, name="register"),
    path("signin/", views.sign_in, name="signin"),
    path("log_out", views.log_out, name="logout"),
]
