from django.http import HttpResponse, HttpResponseNotAllowed
from django.shortcuts import get_object_or_404, redirect, render
from django.utils import timezone

from .forms.company_form import CompanyForm
from .models import Company


# Create your views here.
def index(request):

    if request.method == "POST":
        form = CompanyForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("companies:index")

    companies = Company.objects.filter(deleted_at=None).order_by("-id")

    return render(request, "companies/index.html", {"companies": companies})


def new(request):
    form = CompanyForm()
    return render(request, "companies/new.html", {"form": form})


def edit(request, id):
    company = get_object_or_404(Company, id=id)
    form = CompanyForm(instance=company)
    return render(request, "companies/edit.html", {"form": form, "company": company})


def show(request, id):
    if request.method == "POST":
        company = get_object_or_404(Company, id=id)
        form = CompanyForm(request.POST, instance=company)
        if form.is_valid():
            form.save()
            return redirect("companies:show", company.id)
        else:
            return render(
                request, "companies/edit.html", {"form": form, "company": company}
            )

    company = get_object_or_404(Company, id=id)
    return render(request, "companies/show.html", {"company": company})


def deleted(request, id):
    company = get_object_or_404(Company, id=id)
    if request.method == "POST":
        company.deleted_at = timezone.now()
        company.save()
        return redirect("companies:index")
    return HttpResponseNotAllowed(["POST"])
