from django.contrib import admin
from django.urls import path, include
from . import views

app_name = "page"

urlpatterns = [
    path("", views.index, name="root"),
    path("sign_in", views.sign_in, name="sign_in"),
    path("sign_out", views.sign_out, name="sign_out"),
]
