from .models import Notification


def notifications_processor(request):
    if request.user.is_authenticated:
        unread_notifications_count = Notification.objects.filter(
            recipient=request.user
        ).count()

        notifications = Notification.objects.filter(recipient=request.user).order_by(
            "-created_at"
        )[:5]
    else:
        unread_notifications_count = 0
        notifications = []

    return {
        "unread_notifications_count": unread_notifications_count,
        "notifications": notifications,
    }
