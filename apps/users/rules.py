import rules

@rules.predicate
def user_can_view_info(user, target_user_id):
    return user.is_authenticated and user.id == target_user_id

rules.add_rule("user_can_view_info", user_can_view_info)