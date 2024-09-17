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
    path("info/", views.info, name="info"),
    path("login_redirect/", views.login_redirect, name="login_redirect"),
    path("password_reset/", PasswordResetView.as_view(), name="password_reset"),
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
    path("login-redirect/", views.login_redirect, name="login_redirect"),
    path(
        "favorites_company", views.favorite_company_list, name="favorites_company_list"
    ),
    path(
        "favorites_company/<int:id>/favorite_delete",
        views.favorite_company_delete,
        name="favorite_company_delete",
    ),
    path("<int:job_id>/apply/", views.apply_jobs, name="apply_jobs"),
    path("<int:job_id>/submit", views.submit_jobs, name="submit_jobs"),
]
