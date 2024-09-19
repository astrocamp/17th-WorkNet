import rules
from django.shortcuts import get_object_or_404

from .models import Company


@rules.predicate
def can_edit_company(user, target_job_id):
    company = get_object_or_404(Company, pk=target_job_id)
    return user == company.user


@rules.predicate
def can_new_company(user):
    if user.type != 2:
        return False

    try:
        company = Company.objects.get(user=user)
    except Company.DoesNotExist:
        company = None

    return company == None


rules.add_rule("can_edit_company", can_edit_company)
rules.add_rule("can_new_company", can_new_company)
