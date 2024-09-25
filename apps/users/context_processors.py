from .models import Notification
from django.db.models import Case, When, BooleanField, Value


def notifications_processor(request):

    if request.user.is_authenticated:
        unread_notifications_count = Notification.objects.filter(
            recipient=request.user,
            read=False,
        ).count()

        notifications = (
            Notification.objects.filter(recipient=request.user)
            .annotate(
                unread_first=Case(
                    When(read=False, then=Value(0)),
                    When(read=True, then=Value(1)),
                    output_field=BooleanField(),
                )
            )
            .order_by("unread_first", "-created_at")[:5]
            .values("id", "message", "read", "job_id")
        )
    else:
        unread_notifications_count = 0
        notifications = []

    return {
        "unread": unread_notifications_count > 0,
        "notifications": list(notifications),
    }
