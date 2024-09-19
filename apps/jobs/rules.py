import rules
from django.shortcuts import get_object_or_404

from .models import Job


@rules.predicate
def can_edit_job(user, target_job_id):
    job = get_object_or_404(Job, pk=target_job_id)
    return user == job.company.user


rules.add_rule("can_edit_job", can_edit_job)
