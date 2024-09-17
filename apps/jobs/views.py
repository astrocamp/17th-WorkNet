import json
from urllib.parse import urlparse

from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.http import require_POST

from apps.jobs.models import Job_Resume
from apps.resumes.models import Resume
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
            job = form.save(commit=False)

            tags = request.POST.get("tags")
            if tags:
                tags = [tag["value"] for tag in json.loads(tags)]
                job.tags.set(tags, clear=False)

            job.save()
            messages.success(request, "更新成功")
            return redirect("jobs:show", job.id)
        else:
            return render(request, "jobs/edit.html", {"form": form, "job": job})

    previous_url = request.META.get("HTTP_REFERER", "/")
    referer_path = urlparse(previous_url).path
    backJobs = "resumes" not in referer_path
    return render(
        request,
        "jobs/show.html",
        {"job": job, "backJobs": backJobs, "tags": job.tags.all()},
    )


def edit(request, id):
    job = get_object_or_404(Job, pk=id)
    form = JobForm(instance=job)
    tags = list(job.tags.values_list("name", flat=True))

    return render(request, "jobs/edit.html", {"form": form, "job": job, "tags": tags})


def delete(request, id):
    job = get_object_or_404(Job, pk=id)
    job.mark_delete()
    messages.success(request, "刪除成功")
    return redirect("jobs:index")


@login_required
def apply_jobs(request, id):
    job = get_object_or_404(Job, id=id)
    resumes = Resume.objects.filter(userinfo__user=request.user)
    return render(request, "users/apply.html", {"job": job, "resumes": resumes})


@require_POST
@login_required
def submit_jobs(request, id):
    job_id = request.POST.get("job_id")
    resume_id = request.POST.get("resume_id")
    job = get_object_or_404(Job, id=id)
    resume = get_object_or_404(Resume, id=resume_id, userinfo__user=request.user)

    if Job_Resume.objects.filter(job=job, resume=resume).exists():
        messages.error(request, "已投遞過這個工作，請等候業者審核等候通知，謝謝")
        return redirect("jobs:index")

    else:
        Job_Resume.objects.create(job=job, resume=resume, status="applied")
        messages.success(request, "投遞成功")
    return redirect("jobs:index")
