import json
from collections import Counter

from django.contrib.contenttypes.models import ContentType
from django.shortcuts import render
from taggit.models import TaggedItem

from apps.jobs.models import Job
from apps.users.models import UserInfo
from lib.utils.models.decorators import login_redirect_next


@login_redirect_next
def index(request):

    job_content_type = ContentType.objects.get_for_model(Job)
    job_tags = TaggedItem.objects.filter(content_type=job_content_type).values_list(
        "tag__name", flat=True
    )
    job_skill_counts = Counter(job_tags)
    job_skill_counts_json = json.dumps(dict(job_skill_counts))

    user_content_type = ContentType.objects.get_for_model(UserInfo)
    user_tags = TaggedItem.objects.filter(content_type=user_content_type).values_list(
        "tag__name", flat=True
    )
    user_skill_counts = Counter(user_tags)
    user_skill_counts_json = json.dumps(dict(user_skill_counts))

    job_salary_data = (
        Job.objects.exclude(salary_range__isnull=True)
        .exclude(salary_range="")
        .values_list("tags__name", "salary_range")
    )
    salary_by_language = {}
    for tag, salary in job_salary_data:
        if tag:
            try:
                salary = float(salary)
                salary_by_language.setdefault(tag, []).append(salary)
            except (ValueError, TypeError):
                continue

    average_salary_by_language = {
        tag: sum(salaries) / len(salaries)
        for tag, salaries in salary_by_language.items()
        if len(salaries) > 0
    }
    average_salary_json = json.dumps(average_salary_by_language)

    job_tenure_data = (
        Job.objects.exclude(tenure__isnull=True)
        .exclude(salary_range__isnull=True)
        .exclude(salary_range="")
        .values_list("tenure", "salary_range")
    )

    salary_by_tenure = {}
    for tenure, salary in job_tenure_data:
        try:
            salary = float(salary)
            salary_by_tenure.setdefault(tenure, []).append(salary)
        except (ValueError, TypeError):
            continue

    average_salary_by_tenure = {
        tenure: sum(salaries) / len(salaries)
        for tenure, salaries in salary_by_tenure.items()
        if len(salaries) > 0
    }

    average_tenure_salary_json = json.dumps(average_salary_by_tenure)

    job_location_data = (
        Job.objects.exclude(tags__name__isnull=True)
        .exclude(tags__name="")
        .values_list("location", "tags__name")
    )

    location_language_map = {}
    tag_counter = Counter([tag for location, tag in job_location_data])

    top_five_tags = [tag for tag, _ in tag_counter.most_common(5)]

    for location, tag in job_location_data:
        if tag in top_five_tags:
            if location not in location_language_map:
                location_language_map[location] = {}
            location_language_map[location].setdefault(tag, 0)
            location_language_map[location][tag] += 1

    location_language_data_json = json.dumps(location_language_map)

    return render(
        request,
        "analytics/index.html",
        {
            "job_skill_counts_json": job_skill_counts_json,
            "user_skill_counts_json": user_skill_counts_json,
            "average_salary_json": average_salary_json,
            "average_tenure_salary_json": average_tenure_salary_json,
            "location_language_data_json": location_language_data_json,
        },
    )
