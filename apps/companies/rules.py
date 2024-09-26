import rules
from django.shortcuts import get_object_or_404

from .models import Company


@rules.predicate
def can_edit_company(user, target_job_id):
    company = get_object_or_404(Company, pk=target_job_id)
    return user == company.user


rules.add_rule("can_edit_company", can_edit_company)
