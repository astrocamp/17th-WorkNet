from django.contrib.auth.decorators import login_required

<<<<<<< HEAD
=======

>>>>>>> 94c5ff2 (refactor: resolve conflicts)
from django.shortcuts import get_object_or_404, redirect, render
from django.utils import timezone

from .forms import ResumeForm
from .models import Resume


@login_required
def index(request):
    resumes = Resume.objects.filter(user=request.user).order_by("-uploaded_at")
    return render(request, "resumes/index.html", {"resumes": resumes})


@login_required
def upload(request):
    if request.method == "POST":
        form = ResumeForm(request.POST, request.FILES)
        if form.is_valid():
            resume = form.save(commit=False)
            resume.user = request.user
            resume.save()
            return redirect("resumes:index")
    else:
        form = ResumeForm()
    return render(request, "resumes/upload.html", {"form": form})


@login_required
def delete_resume(request, resume_id):
    resume = get_object_or_404(Resume, id=resume_id)

    resume.deleted_at = timezone.now()
    resume.save()

    return redirect("resumes:index")
