import rules


@rules.predicate
def user_can_view(user):
    return user.is_authenticated
