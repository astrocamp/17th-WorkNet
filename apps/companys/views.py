from django.shortcuts import render, redirect, get_object_or_404
from .models import Company
from .forms.company_form import CompanyForm
from django.utils import timezone
from django.http import HttpResponse
from django.http import HttpResponseNotAllowed


# Create your views here.
def index(request):

    if request.method == "POST":
        form = CompanyForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("companys:index")

    companys = Company.objects.filter(deleted_at=None).order_by("-id")

    return render(request, "companys/index.html", {"companys": companys})


def new(request):
    form = CompanyForm()
    return render(request, "companys/new.html", {"form": form})


def edit(request, id):
    company = get_object_or_404(Company, id=id)
    form = CompanyForm(instance=company)
    return render(request, "companys/edit.html", {"form": form, "company": company})


def show(request, id):
    if request.method == "POST":
        company = get_object_or_404(Company, id=id)
        form = CompanyForm(request.POST, instance=company)
        if form.is_valid():
            form.save()
            return redirect("companys:show", company.id)
        else:
            return render(
                request, "companys/edit.html", {"form": form, "company": company}
            )

    company = get_object_or_404(Company, id=id)
    return render(request, "companys/show.html", {"company": company})


def deleted(request, id):
    company = get_object_or_404(Company, id=id)
    if request.method == "POST":
        company.deleted_at = timezone.now()
        company.save()
        return redirect("companys:index")
    return HttpResponseNotAllowed(["POST"])
