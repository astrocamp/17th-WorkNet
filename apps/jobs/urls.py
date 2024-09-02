from django.urls import path

from . import views

app_name = "jobs"

urlpatterns = [
    path("", views.index, name="index"),
    path("new", views.new, name="new"),
    path("favorites/", views.favorites_list, name="favorites_list"),
    path("<int:id>/favorite", views.favorite, name="favorite"),
    path("<int:id>", views.show, name="show"),
    path("<int:id>/edit", views.edit, name="edit"),
    path("<int:id>/delete", views.delete, name="delete"),
    path(
        "favorites/<int:id>/favorites_delete",
        views.favorites_delete,
        name="favorites_delete",
    ),
]
