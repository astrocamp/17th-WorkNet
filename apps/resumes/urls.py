from django.urls import path

from . import views

app_name = "resumes"

urlpatterns = [
    path("", views.index, name="index"),
    path("jobs", views.jobs, name="jobs"),
    path("upload/", views.upload, name="upload"),
    path("delete/<int:resume_id>/", views.delete_resume, name="delete"),
]
