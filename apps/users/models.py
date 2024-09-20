from django.contrib.auth.models import AbstractUser
from django.db import models
from taggit.managers import TaggableManager

from lib.utils.models.defined import LOCATION_CHOICES


class User(AbstractUser):

    social_userid = models.CharField(max_length=50, blank=True, null=True)
    roles_choice = (
        (1, "user"),
        (2, "company"),
    )
    type = models.PositiveSmallIntegerField(choices=roles_choice, default=1)


class UserInfo(models.Model):

    user = models.OneToOneField(to=User, on_delete=models.CASCADE, blank=False)
    nickname = models.CharField(max_length=30, null=True, blank=True)
    tel = models.CharField(max_length=15, null=True, blank=True)
    location = models.CharField(
        max_length=100, choices=LOCATION_CHOICES, null=True, blank=True
    )
    birth = models.DateField(null=True, blank=True)
    points = models.IntegerField(default=0, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    tags = TaggableManager()


class Notification(models.Model):

    recipient = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="notifications"
    )
    sender = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="sent_notifications",
        null=True,
        blank=True,
    )
    job = models.ForeignKey(
        "jobs.Job",
        on_delete=models.CASCADE,
        related_name="job_notifications",
        null=True,
        blank=True,
    )
    title = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)

    def __str__(self):
        return f'Notification to {self.recipient.username} from {self.sender.username if self.sender else "System"}'
