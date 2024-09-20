from .models import Notification


def notifications_processor(request):

    if request.user.is_authenticated:
        unread_notifications_count = Notification.objects.filter(
            recipient=request.user,
            read=False,
        ).count()

        notifications = (
            Notification.objects.filter(recipient=request.user)
            .order_by("-read", "-created_at")[:5]
            .values("message", "read", "job_id")
        )
    else:
        unread_notifications_count = 0
        notifications = []

    return {
        "unread": unread_notifications_count > 0,
        "notifications": list(notifications),
    }
