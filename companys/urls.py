from django.urls import path
from . import views

app_name = "companys"

urlpatterns = [
    path("", views.index, name="index"),
    path("new", views.new, name="new"),
    path("<int:id>", views.show, name="show"),
    path("<int:id>/edit", views.edit, name="edit"),
    path("<int:id>/deleted", views.deleted, name="deleted"),
]
