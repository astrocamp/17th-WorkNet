from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    social_userid = models.CharField(max_length=50, blank=True, null=True)
