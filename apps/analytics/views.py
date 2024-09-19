import json
from collections import Counter

from django.contrib.contenttypes.models import ContentType
from django.shortcuts import render
from taggit.models import TaggedItem

from apps.jobs.models import Job
from lib.utils.models.decorators import login_redirect_next
from apps.users.models import UserInfo


@login_redirect_next
def index(request):
    job_content_type = ContentType.objects.get_for_model(Job)
    job_tag = TaggedItem.objects.filter(content_type=job_content_type)
    job_tags = job_tag.values_list("tag__name", flat=True)
    job_skill_counter = Counter(job_tags)
    job_skill_counts_json = json.dumps(dict(job_skill_counter))

    user_content_type = ContentType.objects.get_for_model(UserInfo)
    user_tag = TaggedItem.objects.filter(content_type=user_content_type)
    user_tags = user_tag.values_list("tag__name", flat=True)
    user_skill_counter = Counter(user_tags)
    user_skill_counts_json = json.dumps(dict(user_skill_counter))

    return render(
        request,
        "analytics/index.html",
        {
            "job_skill_counts_json": job_skill_counts_json,
            "user_skill_counts_json": user_skill_counts_json,
        },
    )
