import json
from urllib.parse import parse_qs, urlparse

import rules
from django.contrib import messages
from django.db.models import Q
from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.http import require_POST
from taggit.models import Tag, TaggedItem

from apps.resumes.models import Resume
from apps.users.models import UserInfo
from lib.models.paginate import paginate_queryset
from lib.models.rule_required import rule_required
from lib.utils.models.defined import LOCATION_CHOICES

from .forms.jobs_form import JobForm
from .models import Job, Job_Resume, JobFavorite


def index(request):
    jobs = Job.objects.order_by("-id").select_related("company")
    company = []
    locations = LOCATION_CHOICES

    if request.user.is_authenticated and request.user.type == 2:
        company = request.user.company

    jobs = Job.objects.order_by("-id")

    job_form = JobForm()

    jobs_with_permissions = [
        {
            "id": job.id,
            "title": job.title,
            "description": job.description,
            "type": job.type,
            "created_at": job.created_at,
            "get_location_display": job.get_location_display,
            "location": job.location,
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
            "locations": locations,
            "job_form": job_form,
        },
    )


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
    parsed_url = urlparse(previous_url)
    query_params = parse_qs(parsed_url.query)

    is_search_result = "search" in referer_path
    search_query = query_params.get("q", [""])[0]
    location = query_params.get("location", [""])[0]

    status = False
    favorited = False

    if request.user.is_authenticated and request.user.type == 1:
        try:
            user_info = UserInfo.objects.get(user=request.user)
            user_resume = Resume.objects.filter(userinfo=user_info).values_list(
                "id", flat=True
            )
            status = Job_Resume.objects.filter(job=job, resume__in=user_resume).exists()
            favorited = JobFavorite.objects.filter(job=job, user=request.user).exists()

        except UserInfo.DoesNotExist:
            user_info = None

    return render(
        request,
        "jobs/show.html",
        {
            "job": job,
            "tags": job.tags.all(),
            "status": status,
            "is_search_result": is_search_result,
            "search_query": search_query,
            "location": location,
            "favorited": favorited,
        },
    )


@rule_required("can_edit_job")
def edit(request, id):
    job = get_object_or_404(Job, pk=id)
    form = JobForm(instance=job)
    tags = list(job.tags.values_list("name", flat=True))

    return render(request, "jobs/edit.html", {"form": form, "job": job, "tags": tags})


@require_POST
def delete(request, id):
    job = get_object_or_404(Job, pk=id)
    job.mark_delete()
    messages.success(request, "刪除成功")
    return redirect("jobs:index")


def search_results(request):
    search_term = request.GET.get("q")
    location = request.GET.get("location")
    tags = request.GET.getlist("tags")
    search_filter = Q()

    if search_term:
        tagged_items = TaggedItem.objects.filter(tag__name__icontains=search_term)
        job_ids_with_tags = tagged_items.values_list("object_id", flat=True)

        search_filter &= (
            Q(title__icontains=search_term)
            | Q(company__title__icontains=search_term)
            | Q(location__icontains=search_term)
            | Q(id__in=job_ids_with_tags)
        )

    if location:
        search_filter &= Q(location=location)

    if tags:
        tagged_items = TaggedItem.objects.filter(tag__name__in=tags)
        job_ids_with_tags = tagged_items.values_list("object_id", flat=True)
        search_filter &= Q(id__in=job_ids_with_tags)

    jobs = (
        Job.objects.filter(search_filter)
        .select_related("company")
        .distinct()
        .order_by("-created_at")
    )

    count = jobs.count()

    jobs_with_permissions = [
        {
            "id": job.id,
            "title": job.title,
            "description": job.description,
            "type": job.type,
            "created_at": job.created_at,
            "get_location_display": job.get_location_display,
            "location": job.location,
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

    applied_job_ids = []
    if request.user.is_authenticated:
        applied_job_ids = Job_Resume.objects.filter(
            resume__userinfo__user=request.user
        ).values_list("job_id", flat=True)

    current_page = request.GET.get("page", 1)
    page_obj = paginate_queryset(request, jobs_with_permissions, 10)
    all_tags = Tag.objects.all()

    location_dict = dict(LOCATION_CHOICES)
    location_label = location_dict.get(location)

    return render(
        request,
        "jobs/search_results.html",
        {
            "page_obj": page_obj,
            "tags": tags,
            "all_tags": all_tags,
            "search_term": search_term,
            "location": location_label,
            "locations": LOCATION_CHOICES,
            "applied_job_ids": list(applied_job_ids),
            "current_page": current_page,
            "count": count,
        },
    )
