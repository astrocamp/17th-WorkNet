from django.db.models.signals import post_save
from django.dispatch import receiver
from apps.users.models import Notification
from apps.jobs.models import Job


@receiver(post_save, sender=Job)
def job_posting_created(sender, instance, created, **kwargs):
    if created:

        company = instance.company
        followers = company.favorited_by_users.all()

        for favorite in followers:
            user = favorite.user
            Notification.objects.create(
                recipient=user,
                sender=company.user,
                title="New Job",
                message=f"{instance.company.title} 發布新職缺：{instance.title}",
            )
