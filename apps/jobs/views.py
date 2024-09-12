from urllib.parse import urlparse

from django.contrib import messages
from django.shortcuts import get_object_or_404, redirect, render

from lib.models.paginate import paginate_queryset

from .forms.jobs_form import JobForm
from .models import Job


def index(request):
    jobs = Job.objects.order_by("-id")
    page_obj = paginate_queryset(request, jobs, 10)
    return render(request, "jobs/index.html", {"page_obj": page_obj})


def show(request, id):
    job = get_object_or_404(Job, pk=id)
    if request.method == "POST":
        form = JobForm(request.POST, instance=job)
        if form.is_valid():
            form.save()
            messages.success(request, "更新成功")
            return redirect("jobs:show", job.id)
        else:
            return render(request, "jobs/edit.html", {"form": form, "job": job})

    previous_url = request.META.get("HTTP_REFERER", "/")
    referer_path = urlparse(previous_url).path
    backJobs = "resumes" not in referer_path
    return render(request, "jobs/show.html", {"job": job, "backJobs": backJobs})


def edit(request, id):
    job = get_object_or_404(Job, pk=id)
    form = JobForm(instance=job)
    return render(request, "jobs/edit.html", {"form": form, "job": job})


def delete(request, id):
    job = get_object_or_404(Job, pk=id)
    job.mark_delete()
    messages.success(request, "刪除成功")
    return redirect("jobs:index")
