from functools import wraps

import rules
from django.http import HttpResponseForbidden


def rule_required(rule_name):
    def decorator(view_func):
        @wraps(view_func)
        def _wrapped_view(request, *args, **kwargs):
            user = request.user
            target_id = kwargs.get("id")
            if not rules.test_rule(rule_name, user, target_id):
                return HttpResponseForbidden("您沒有權限觀看此頁面")
            return view_func(request, *args, **kwargs)

        return _wrapped_view

    return decorator
