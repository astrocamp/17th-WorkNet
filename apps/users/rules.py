import rules


@rules.predicate
def user_can_view(user, target_user_id):
    return user.is_authenticated and user.id == target_user_id
