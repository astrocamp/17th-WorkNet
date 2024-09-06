from django.urls import path

from . import views
from .views import PasswordResetDoneView, PasswordResetView

app_name = "users"

urlpatterns = [
    path("", views.index, name="index"),
    path("sign_in/", views.sign_in, name="sign_in"),
    path("sign_out/", views.sign_out, name="sign_out"),
    path("register/", views.register, name="register"),
    path("<int:id>/info/", views.info, name="info"),
    path("login_redirect/", views.login_redirect, name="login_redirect"),
    path("password_reset/", PasswordResetView.as_view(), name="password_reset"),
    path(
        "password_reset_done/",
        PasswordResetDoneView.as_view(),
        name="password_reset_done",
    ),
]
