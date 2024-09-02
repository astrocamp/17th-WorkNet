from django.db import models

from apps.companies.models import Company
from apps.users.models import User
from lib.models.soft_delete import SoftDeleteManager

from ..users.models import User


class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(default=None, null=True)
    user = models.ForeignKey(to=User, on_delete=models.SET_NULL, null=True)
    like_cnt = models.IntegerField(default=0)
    dislike_cnt = models.IntegerField(default=0)

    user = models.ForeignKey(to=User, on_delete=models.SET_NULL, null=True)
    company = models.ForeignKey(to=Company, on_delete=models.CASCADE, null=True)

    score = models.PositiveSmallIntegerField(
        choices=[(i, str(i)) for i in range(1, 6)], default=1
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


class LikeLog(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE)
    like_type = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True)
