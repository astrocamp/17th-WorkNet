from django.shortcuts import get_object_or_404, redirect, render

from .forms import JobForm

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
