import rules
from django.shortcuts import get_object_or_404

from apps.companies.models import Company

from .models import Job


@rules.predicate
def can_edit_job(user, target_id):
    job = get_object_or_404(Job, pk=target_id)
    return user == job.company.user


@rules.predicate
def can_new_job(user, target_id):
    company = get_object_or_404(Company, pk=target_id)
    return user == company.user


rules.add_rule("can_edit_job", can_edit_job)
rules.add_rule("can_new_job", can_new_job)
