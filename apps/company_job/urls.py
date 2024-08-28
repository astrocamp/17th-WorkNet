from django.urls import path

from . import views

app_name = "jobs"

urlpatterns = [
    path("", views.index, name="index"),
    path("new", views.jobsnew, name="jobsnew"),
    path("<int:id>", views.jobshow, name="jobshow"),
    path("<int:id>/edit", views.jobsedit, name="jobsedit"),
    path("<int:id>/delete", views.delete, name="jobsdelete"),
]
