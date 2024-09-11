from django.db import models

from apps.users.models import User
from lib.models.soft_delete import SoftDeleteManager, SoftDeletetable


class Company(SoftDeletetable, models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=False, null=True)
    title = models.CharField(max_length=200)
    tel = models.CharField(max_length=15)
    url = models.URLField()
    address = models.CharField(max_length=300)
    description = models.TextField()
    employees = models.IntegerField()
    name = models.CharField(max_length=200)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(default=None, null=True)

    objects = SoftDeleteManager()

    class Meta:
        indexes = [
            models.Index(fields=["deleted_at"]),
        ]
