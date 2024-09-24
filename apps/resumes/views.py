from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Case, CharField, OuterRef, Subquery, When
from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.http import require_http_methods, require_POST

from apps.jobs.models import Job, Job_Resume

from .forms.resumes_form import ResumeForm
from .models import Resume


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
            uploaded_file = request.FILES.get("file")
            resume.original_filename = uploaded_file.name
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
    messages.success(request, "履歷已成功刪除")
    return redirect("resumes:index")


@login_required
def jobs(request):
    job_title = Job.objects.filter(id=OuterRef("job_id")).values("title")[:1]
    company_title = Job.objects.filter(id=OuterRef("job_id")).values("company__title")[
        :1
    ]
    resume_file = Resume.objects.filter(id=OuterRef("resume_id")).values("file")[:1]
    resume_name = Resume.objects.filter(id=OuterRef("resume_id")).values("name")[:1]
    resume = Resume.objects.filter(userinfo__user_id=request.user.id).values("id")
    job_resumes = (
        Job_Resume.objects.filter(resume_id__in=resume)
        .order_by("-created_at")
        .annotate(
            job_title=Subquery(job_title),
            company_title=Subquery(company_title),
            resume_file=Subquery(resume_file),
            resume_name=Subquery(resume_name),
            file_name=Case(
                When(resume_name="", then=Subquery(resume_file)),
                default="resume_name",
                output_field=CharField(),
            ),
        )
    )

    return render(request, "resumes/job.html", {"job_resumes": job_resumes})

@login_required
def jobs_delete(request, id):
    job_resume = get_object_or_404(Job_Resume, id=id)

    if job_resume.resume.userinfo.user != request.user:
        messages.error(request, "你沒有權限取消此應徵")
        return redirect("resumes:jobs")
    else:
        job_resume.delete()
        messages.success(request, "已取消應徵")
        return redirect("resumes:jobs")


@login_required
def edit(request, id):
    resume = get_object_or_404(Resume, id=id)
    if request.method == "POST":
        form = ResumeForm(request.POST, instance=resume)
        if form.is_valid():
            form.save()
            messages.success(request, "檔名更新成功")
            return redirect("resumes:index")
    else:
        form = ResumeForm(instance=resume)

    print("---")
    print(Resume)
    print("----")
    return render(request, "resumes/edit.html", {"form": form, "resume": resume})
