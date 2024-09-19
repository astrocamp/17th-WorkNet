import rules
from django.shortcuts import get_object_or_404

from .models import Post


@rules.predicate
def can_edit_post(user, post_or_post_id):
    if isinstance(post_or_post_id, int):
        post = get_object_or_404(Post, id=post_or_post_id)
    else:
        post = post_or_post_id
    return user == post.user


rules.add_rule("can_edit_post", can_edit_post)
