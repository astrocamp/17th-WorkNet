from functools import wraps
from django.shortcuts import redirect
from django.urls import reverse
from django.core.exceptions import PermissionDenied

def login_redirect_next(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated:
            return view_func(request, *args, **kwargs)
        else:
            return redirect(reverse("users:sign_in") + f"?next={request.path}")

    return wrapper


def company_required(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if request.user.type == 2:
            return view_func(request, *args, **kwargs)
        else:
            raise PermissionDenied

    return wrapper