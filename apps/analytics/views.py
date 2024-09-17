import json
from collections import Counter

from django.shortcuts import render

from apps.jobs.models import Job


def index(request):
    tags = Job.tags.through.objects.values_list("tag__name", flat=True)
    skill_counter = Counter(tags)

    skill_counts_json = json.dumps(dict(skill_counter))

    return render(
        request, "analytics/index.html", {"skill_counts_json": skill_counts_json}
    )
