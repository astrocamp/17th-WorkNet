from django.urls import path

from . import views

app_name = "resumes"

urlpatterns = [
    path("", views.index, name="index"),
    path("jobs", views.jobs, name="jobs"),
    path("upload/", views.upload, name="upload"),
    path("delete/<int:id>/", views.delete, name="delete"),
    path("edit/<int:id>/", views.edit, name="edit"),
    path("jobs_delete/<int:id>/", views.jobs_delete, name="jobs_delete"),
]
