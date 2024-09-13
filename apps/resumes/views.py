from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.http import require_http_methods, require_POST

from .forms.resumes_form import ResumeForm
from .models import Resume
from apps.jobs.models import Job_Resume, Job
from django.db.models import Subquery, OuterRef


@login_required
def index(request):
    resumes = Resume.objects.filter(userinfo=request.user.userinfo).order_by(
        "-uploaded_at"
    )
    return render(request, "resumes/index.html", {"resumes": resumes})


@login_required
@require_http_methods(["GET", "POST"])
def upload(request):
    resume_count = Resume.objects.filter(
        userinfo=request.user.userinfo, deleted_at__isnull=True
    ).count()

    if resume_count >= 3:
        messages.error(request, "你已經達到最多上傳 3 份履歷的限制")
        return redirect("resumes:index")

    if request.method == "POST":
        form = ResumeForm(request.POST, request.FILES)
        if form.is_valid():
            resume = form.save(commit=False)
            resume.userinfo = request.user.userinfo
            resume.save()
            return redirect("resumes:index")
    else:
        form = ResumeForm()

    return render(request, "resumes/upload.html", {"form": form})


@login_required
@require_POST
def delete(request, id):
    resume = get_object_or_404(Resume, id=id)
    resume.mark_delete()
    return redirect("resumes:index")


@login_required
def jobs(request):
    job_title_subquery = Job.objects.filter(id=OuterRef("job_id")).values("title")[:1]
    resume_file_subquery = Resume.objects.filter(id=OuterRef("resume_id")).values(
        "file"
    )[:1]
    resume_subquery = Resume.objects.filter(userinfo__user_id=request.user.id).values(
        "id"
    )
    job_resumes = Job_Resume.objects.filter(resume_id__in=resume_subquery).annotate(
        job_title=Subquery(job_title_subquery),
        resume_file=Subquery(resume_file_subquery),
    )
    return render(request, "resumes/job.html", {"job_resumes": job_resumes})


@login_required
@require_http_methods(["GET", "POST"])
def edit(request, id):
    resume = get_object_or_404(Resume, id=id)
    if request.method == "POST":
        form = ResumeForm(request.POST, instance=resume)
        if form.is_valid():
            form.save()
            messages.success(request, "更新成功")
            return redirect("resumes:index")
    else:
        form = ResumeForm(instance=resume)
    return render(request, "resumes/edit.html", {"form": form, "resume": resume})
