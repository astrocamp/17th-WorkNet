from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render
from django.utils import timezone

from .forms.jobs_form import JobForm
from .models import Job


def index(request):
    if request.method == "POST":
        form = JobForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("jobs:index")
        else:
            return render(request, "jobs/new.html", {"form": form})
    jobs = Job.objects.all()
    return render(request, "jobs/index.html", {"jobs": jobs})


def new(request):
    form = JobForm()
    return render(request, "jobs/new.html", {"form": form})


def show(request, id):
    job = get_object_or_404(Job, pk=id)
    if request.method == "POST":
        form = JobForm(request.POST, instance=job)
        if form.is_valid():
            form.save()
            return redirect("jobs:show", job.id)
        else:
            return render(request, "jobs/edit.html", {"form": form, "job": job})
    return render(request, "jobs/show.html", {"job": job})


def edit(request, id):
    job = get_object_or_404(Job, pk=id)
    form = JobForm(instance=job)
    return render(request, "jobs/edit.html", {"form": form, "job": job})


def delete(request, id):
    job = get_object_or_404(Job, pk=id)
    job.mark_delete()
    return redirect("jobs:index")


@login_required
def favorite(request, id):
    job = get_object_or_404(Job, pk=id)
    user = request.user

    if not JobFavorite.objects.filter(user=user, job=job).exists():

        JobFavorite.objects.create(user=user, job=job, favorited_at=timezone.now())

        return redirect("jobs:index")


@login_required
def favorites_list(request):
    user = request.user
    favorites = JobFavorite.objects.filter(user=user).order_by("-favorited_at")
    return render(request, "jobs/favorites.html", {"favorites": favorites})


@login_required
def favorites_delete(request, id):
    favorite = get_object_or_404(JobFavorite, pk=id)
    if favorite.user != request.user:
        return redirect("jobs:favorites_list")

    favorite.delete()
    return redirect("jobs:favorites_list")
