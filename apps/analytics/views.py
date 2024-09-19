import json
from collections import Counter

from django.contrib.contenttypes.models import ContentType
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from taggit.models import TaggedItem

from apps.jobs.models import Job


@login_required
def index(request):
    content_type = ContentType.objects.get_for_model(Job)
    job_tag = TaggedItem.objects.filter(content_type=content_type)

    tags = job_tag.values_list("tag__name", flat=True)
    skill_counter = Counter(tags)
    skill_counts_json = json.dumps(dict(skill_counter))

    return render(
        request, "analytics/index.html", {"skill_counts_json": skill_counts_json}
    )
