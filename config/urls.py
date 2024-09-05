from debug_toolbar.toolbar import debug_toolbar_urls
from django.contrib import admin
from django.urls import include, path

from lib.utils.env import is_dev

urlpatterns = [
    path("companies/", include("apps.companies.urls")),
    path("admin/", admin.site.urls),
    path("", include("apps.users.urls")),
    path("jobs/", include("apps.jobs.urls")),
    path("posts/", include("apps.posts.urls")),
    path("social-auth/", include("social_django.urls", namespace="social")),
    path("resumes/", include("apps.resumes.urls")),
]

if is_dev():
    urlpatterns += debug_toolbar_urls()
