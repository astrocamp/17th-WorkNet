from django.urls import path

from . import views

app_name = "payments"

urlpatterns = [
    path("", views.request, name="index"),
    path("confirm", views.confirm, name="confirm"),
]
