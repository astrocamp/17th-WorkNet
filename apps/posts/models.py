from django.db import models
from lib.models.soft_delete import PostManager


class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(default=None, null=True)

    objects = PostManager()  # 使用自定义管理器

    def __str__(self):
        return self.title
