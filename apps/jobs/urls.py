from django.urls import path

from apps.users import views as userviews

from . import views

app_name = "jobs"

urlpatterns = [
    path("", views.index, name="index"),
    path("<int:id>/edit", views.edit, name="edit"),
    path("<int:id>/delete", views.delete, name="delete"),
    path("<int:id>/apply", userviews.apply_jobs, name="apply_jobs"),
    path("<int:id>submit", userviews.submit_jobs, name="submit_jobs"),
    path("<int:id>", views.show, name="show"),
]
