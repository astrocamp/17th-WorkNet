from django.urls import path

from . import views

app_name = "payments"

urlpatterns = [
    path('request', views.request, name='request'),

]
