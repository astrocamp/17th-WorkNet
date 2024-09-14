import json
from collections import Counter

from django.shortcuts import render

from apps.jobs.models import Job


def index(request):
    jobs = Job.objects.values_list("skills", flat=True)
    skill_counter = Counter()
    for job_skills in jobs:
        skill_list = job_skills.split(",")
        skill_counter.update(skill_list)

    skill_counts_json = json.dumps(dict(skill_counter))

    return render(
        request, "analytics/index.html", {"skill_counts_json": skill_counts_json}
    )
