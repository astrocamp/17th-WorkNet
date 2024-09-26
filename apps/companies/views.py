import json

import rules
from django.conf import settings
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse
from django.views.decorators.http import require_http_methods, require_POST
from taggit.models import Tag, TaggedItem

from apps.jobs.forms import JobForm
from apps.jobs.models import Job, Job_Resume, JobFavorite
from apps.posts.forms.posts_form import PostForm
from apps.posts.models import Post
from apps.resumes.models import Resume
from apps.users.models import UserInfo
from lib.models.paginate import paginate_queryset
from lib.models.rule_required import rule_required
from lib.utils.models.decorators import company_required
from lib.utils.models.defined import LOCATION_CHOICES, fetch_coordinates

from .forms.companies_form import CompanyForm
from .models import Company, CompanyFavorite


def index(request):
    if request.method == "POST":
        company = get_object_or_404(Company, user=request.user)
        form = CompanyForm(request.POST, instance=company)

        if form.is_valid():
            form.save()

            coord_x, coord_y = fetch_coordinates(company.address)
<<<<<<< HEAD

=======
>>>>>>> 090bf39 (refactor: delete test code)
            if coord_x and coord_y:
                company.latitude = coord_x
                company.longitude = coord_y
                company.save()

            messages.success(request, "新增成功")
            return redirect("companies:index")
    companies = Company.objects.order_by("-id")

    company_data = [
        {
            "company": company,
            "favorited": company.is_favorited_by(request.user),
            "can_edit": rules.test_rule("can_edit_company", request.user, company.id),
            "post_count": Post.objects.filter(company=company).count(),
            "images": (
                f"https://{settings.AWS_S3_CUSTOM_DOMAIN}/{company.images}"
                if company.images
                else f"{settings.STATIC_URL}imgs/logo.png"
            ),
        }
        for company in companies
    ]

    page_obj = paginate_queryset(request, company_data, 10)
    return render(request, "companies/index.html", {"page_obj": page_obj})


@rule_required("can_edit_company")
def edit(request, id):
    company = get_object_or_404(Company, id=id)
    form = CompanyForm(instance=company)
    return render(request, "companies/edit.html", {"form": form, "company": company})


def show(request, id):
    company = get_object_or_404(Company, id=id)
    if request.method == "POST":
        company = get_object_or_404(Company, id=id)
        form = CompanyForm(request.POST, request.FILES, instance=company)
        if form.is_valid():
            form.save()

            coord_x, coord_y = fetch_coordinates(company.address)
            if coord_x and coord_y:
                company.latitude = coord_x
                company.longitude = coord_y
                company.save()

            messages.success(request, "更新成功")
            return redirect("companies:show", company.id)
        else:
            return render(
                request,
                "companies/edit.html",
                {"form": form, "company": company},
            )

    posts = Post.objects.filter(company=company).order_by("-created_at")[:10]
    posts_data = [
        {
            "id": post.id,
            "title": post.title,
            "content": post.content,
            "score": post.score,
            "created_at": post.created_at,
            "user": post.user,
            "can_edit": (
                rules.test_rule("can_edit_post", request.user, post)
                if request.user.is_authenticated
                else False
            ),
        }
        for post in posts
    ]

    user_resume = []
    if request.user.is_authenticated and 1 == request.user.type:
        user_info = UserInfo.objects.get(user=request.user)
        user_resume = Resume.objects.filter(userinfo=user_info).values_list(
            "id", flat=True
        )
    location_dict = dict(LOCATION_CHOICES)
    jobs = Job.objects.filter(company=company).order_by("-created_at")[:5]
    jobs_data = [
        {
            "id": job.id,
            "title": job.title,
            "description": job.description,
            "type": job.type,
            "location_label": location_dict.get(job.location),
            "location": job.location,
            "salary": job.salary_range,
            "created_at": job.created_at,
            "favorited": (
                JobFavorite.objects.filter(job=job, user=request.user).exists()
                if request.user.is_authenticated
                else False
            ),
            "apply": Job_Resume.objects.filter(
                job=job, resume__in=user_resume
            ).exists(),
        }
        for job in jobs
    ]

    company.favorited = (
        CompanyFavorite.objects.filter(company=company, user=request.user).exists()
        if request.user.is_authenticated
        else False
    )

    return render(
        request,
        "companies/show.html",
        {
            "company": company,
            "jobs": jobs_data,
            "posts": posts_data,
            "GOOGLE_MAPS_API_KEY": settings.GOOGLE_MAPS_API_KEY,
        },
    )


@login_required
def favorite(request, id):
    company = get_object_or_404(Company, pk=id)
    if request.method == "POST":
        company.mark_delete()
        return redirect("companies:index")


@require_POST
def favorite_company(request, id):
    company = get_object_or_404(Company, pk=id)
    user = request.user
    favorited = company.is_favorited_by(user)

    if favorited:
        company.favorite.remove(user)
    else:
        company.favorite.add(user)

    return render(
        request,
        "companies/favorite.html",
        {"company": company, "favorited": not favorited},
    )


def post_index(request, id):
    company = get_object_or_404(Company, id=id)
    posts = Post.objects.filter(company=company).order_by("-created_at")

    posts_with_permissions = [
        {"post": post, "can_edit": rules.test_rule("can_edit_post", request.user, post)}
        for post in posts
    ]
    page_obj = paginate_queryset(request, posts_with_permissions, 10)

    return render(
        request, "posts/index.html", {"page_obj": page_obj, "company": company}
    )


@login_required
@require_http_methods(["GET", "POST"])
def post_new(request, id):
    company = get_object_or_404(Company, id=id)
    form = PostForm(request.POST)
    if form.is_valid():
        post = form.save(commit=False)
        post.company = company
        post.user = request.user
        post.save()

        messages.success(request, "新增成功")
        return redirect(reverse("posts:show", args=[post.id]))
    else:
        form = PostForm()
    return render(request, "posts/new.html", {"form": form, "company": company})


def jobs_index(request, id):
    company = get_object_or_404(Company, id=id)

    jobs = Job.objects.filter(company=company).order_by("-id").select_related("company")

    jobs_with_permissions = [
        {
            "id": job.id,
            "title": job.title,
            "description": job.description,
            "type": job.type,
            "created_at": job.created_at,
            "get_location_display": job.get_location_display,
            "salary_range": job.salary_range,
            "company": job.company.title,
            "company_id": job.company.id,
            "can_edit": rules.test_rule("can_edit_job", request.user, job.id),
            "favorited": (
                JobFavorite.objects.filter(job=job, user=request.user).exists()
                if request.user.is_authenticated
                else False
            ),
        }
        for job in jobs
    ]

    page_obj = paginate_queryset(request, jobs_with_permissions, 10)
    return render(
        request,
        "jobs/index.html",
        {
            "page_obj": page_obj,
            "company": company,
        },
    )


@login_required
@rule_required("can_new_job")
def jobs_new(request, id):
    company = get_object_or_404(Company, id=id)
    form = JobForm(request.POST)
    if form.is_valid():
        job = form.save(commit=False)
        job.company = company
        job.save()

        tags = request.POST.get("tags")
        if tags:
            tags = [tag["value"] for tag in json.loads(tags)]
            job.tags.add(*tags)
            job.save()
        messages.success(request, "新增成功")
        return redirect(reverse("companies:jobs_index", args=[company.id]))
    else:
        form = JobForm()
    return render(request, "jobs/new.html", {"form": form, "company": company})


@company_required
def company_application(request):
    company = request.user.company
    applications = Job_Resume.objects.filter(job__company=company).order_by(
        "-created_at"
    )

    return render(
        request, "companies/applications.html", {"applications": applications}
    )


def search_results(request):
    search_term = request.GET.get("q")
    search_filter = Q()

    if search_term:
        search_filter &= Q(title__icontains=search_term)

    companies = Company.objects.filter(search_filter).distinct().order_by("-created_at")
    count = companies.count()

    companies_data = [
        {
            "id": company.id,
            "title": company.title,
            "description": company.description,
            "score": company.score,
            "can_edit": rules.test_rule("can_edit_company", request.user, company.id),
            "favorited": (
                CompanyFavorite.objects.filter(
                    company=company, user=request.user
                ).exists()
                if request.user.is_authenticated
                else False
            ),
            "post_count": Post.objects.filter(company=company).count(),
            "images": (
                f"https://{settings.AWS_S3_CUSTOM_DOMAIN}/{company.images}"
                if company.images
                else f"{settings.STATIC_URL}imgs/logo.png"
            ),
        }
        for company in companies
    ]

    current_page = request.GET.get("page", 1)
    page_obj = paginate_queryset(request, companies_data, 10)

    return render(
        request,
        "companies/search_results.html",
        {
            "page_obj": page_obj,
            "search_term": search_term,
            "current_page": current_page,
            "count": count,
        },
    )
