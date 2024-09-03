from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import ResumeForm
from .models import Resume, User


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
