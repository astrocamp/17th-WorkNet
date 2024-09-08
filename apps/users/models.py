from django.contrib.auth.models import AbstractUser
from django.db import models

from lib.utils.models.defined import LOCATION_CHOICES
from lib.utils.models.update_date import TimeStampedModel


class User(AbstractUser):

    social_userid = models.CharField(max_length=50, blank=True, null=True)
    type_choices = (
        (1, "user"),
        (2, "company"),
    )
    type = models.PositiveSmallIntegerField(choices=type_choices, default=1)


class UserInfo(TimeStampedModel):

    user = models.OneToOneField(to=User, on_delete=models.CASCADE, blank=False)
    nickname = models.CharField(max_length=30, null=True, blank=True)
    tel = models.CharField(max_length=15, null=True, blank=True)
    location = models.CharField(
        max_length=100, choices=LOCATION_CHOICES, null=True, blank=True
    )
    birth = models.DateField(null=True, blank=True)
    points = models.IntegerField(default=0, blank=True)
    updated_at = models.DateTimeField(null=True, blank=True)
