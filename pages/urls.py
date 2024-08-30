from debug_toolbar.toolbar import debug_toolbar_urls
from django.contrib import admin
from django.urls import include, path

from . import views

app_name = "pages"

urlpatterns = [path("", views.home, name="home")]
