from django.urls import path
from django.views.generic import TemplateView

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
    path("<int:id>/record/", views.record, name="record"),
    path(
        "password_reset_done/",
        PasswordResetDoneView.as_view(),
        name="password_reset_done",
    ),
    path("favorites/", views.favorites_list, name="favorites_list"),
    path("<int:id>/favorite", views.favorite, name="favorite"),
    path(
        "favorites/<int:id>/favorites_delete",
        views.favorites_delete,
        name="favorites_delete",
    ),
]
