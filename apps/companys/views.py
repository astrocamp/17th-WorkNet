from django.shortcuts import render, redirect, get_object_or_404
from .models import Company
from .forms.company_form import CompanyForm
from django.utils import timezone
from django.http import HttpResponse
from django.http import HttpResponseNotAllowed


# Create your views here.
def index(req):

    if req.method == "POST":
        form = CompanyForm(req.POST)
        if form.is_valid():
            form.save()
            return redirect("companys:index")

    companys = Company.objects.filter(deleted_at=None).order_by("-id")

    return render(req, "companys/index.html", {"companys": companys})


def new(req):
    form = CompanyForm()
    return render(req, "companys/new.html", {"form": form})


def edit(req, id):
    company = get_object_or_404(Company, id=id)
    form = CompanyForm(instance=company)
    return render(req, "companys/edit.html", {"form": form, "company": company})


def show(req, id):
    if req.method == "POST":
        company = get_object_or_404(Company, id=id)
        form = CompanyForm(req.POST, instance=company)
        if form.is_valid():
            form.save()
            return redirect("companys:show", company.id)
        else:
            return render(req, "companys/edit.html", {"form": form, "company": company})

    company = get_object_or_404(Company, id=id)
    return render(req, "companys/show.html", {"company": company})


def deleted(req, id):
    company = get_object_or_404(Company, id=id)
    if req.method == "POST":
        company.deleted_at = timezone.now()
        company.save()
        return redirect("companys:index")
    return HttpResponseNotAllowed(["POST"])
