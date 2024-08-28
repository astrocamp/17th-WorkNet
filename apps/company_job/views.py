from django.shortcuts import get_object_or_404, redirect, render

from .forms import JobForm
from .models import Job

# Create your views here.


def index(request):
    if request.method == "POST":
        form = JobForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("jobs:index")
        else:
            return render(request, "jobs/jobsnew.html", {"form": form})
    jobs = Job.objects.filter(is_deleted=False)
    return render(request, "jobs/index.html", {"jobs": jobs})


def jobsnew(request):
    form = JobForm()
    return render(request, "jobs/jobsnew.html", {"form": form})


def jobshow(request, id):
    job = get_object_or_404(Job, pk=id)
    if request.method == "POST":
        form = JobForm(request.POST, instance=job)
        if form.is_valid():
            form.save()
            return redirect("jobs:jobshow", job.id)
        else:
            return render(request, "jobs/jobsedit.html", {"form": form, "job": job})
    return render(request, "jobs/jobshow.html", {"job": job})


def jobsedit(request, id):
    job = get_object_or_404(Job, pk=id)
    form = JobForm(instance=job)
    return render(request, "jobs/jobsedit.html", {"form": form, "job": job})


def delete(request, id):
    job = get_object_or_404(Job, pk=id)
    job.mark_delete()
    return redirect("jobs:index")
