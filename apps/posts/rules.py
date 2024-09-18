import rules
from django.shortcuts import get_object_or_404

from .models import Post


@rules.predicate
def can_edit_post(user, post):
    return user == post.user


rules.add_rule("can_edit_post", can_edit_post)
