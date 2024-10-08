from django.urls import path

from . import views

app_name = "posts"

urlpatterns = [
    path("", views.index, name="index"),
    path("<int:id>", views.show, name="show"),
    path("<int:id>/edit", views.edit, name="edit"),
    path("<int:id>/delete", views.delete, name="delete"),
    path("<int:id>/comments", views.show, name="comment"),
    path("comments/<int:id>/delete", views.comment_delete, name="comment_delete"),
    path("<int:id>/reaction", views.reaction, name="reaction"),
]
