from django.urls import path

from . import views

app_name = "companies"

urlpatterns = [
    path("", views.index, name="index"),
    path("<int:id>/posts/", views.post_index, name="post_index"),
    path("<int:id>/new/", views.post_new, name="post_new"),
    path("<int:id>/jobs", views.jobs_index, name="jobs_index"),
    path("<int:id>/jobs_new", views.jobs_new, name="jobs_new"),
    path("<int:id>", views.show, name="show"),
    path("<int:id>/edit", views.edit, name="edit"),
    path("<int:id>/favorite", views.favorite_company, name="favorite"),
    path("application/", views.company_application, name="company_application"),
    path("search/", views.search_results, name="search_results"),
]
