from django.http import HttpResponse, HttpResponseNotAllowed
from django.shortcuts import get_object_or_404, redirect, render

from .forms.form import CompanyForm
from .models import Company


# Create your views here.
def index(request):

    if request.method == "POST":
        form = CompanyForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("companies:index")

    companies = Company.objects.order_by("-id")

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
        company.mark_delete()
        return redirect("companies:index")
