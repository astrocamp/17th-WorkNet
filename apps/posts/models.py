from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from apps.companies.models import Company
from apps.users.models import User
from lib.models.soft_delete import SoftDeleteManager


class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(default=None, null=True)

    user = models.ForeignKey(to=User, on_delete=models.SET_NULL, null=True)
    company = models.ForeignKey(to=Company, on_delete=models.CASCADE, null=True)

    score = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)], default=1
    )

    objects = SoftDeleteManager()

    def __str__(self):
        return self.title


class Comment(models.Model):
    post = models.ForeignKey(Post, related_name="comments", on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(default=None, null=True)

    objects = SoftDeleteManager()
