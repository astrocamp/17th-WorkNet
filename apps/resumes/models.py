from django.db import models

from apps.users.models import UserInfo
from lib.models.soft_delete import SoftDeleteManager, SoftDeletetable


class Resume(SoftDeletetable, models.Model):
    userinfo = models.ForeignKey(
        UserInfo, on_delete=models.CASCADE, related_name="resumes"
    )
    file = models.FileField(upload_to="resumes/")
    uploaded_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)
    name = models.CharField(max_length=255, blank=True)
    original_filename = models.CharField(max_length=255, blank=True)

    objects = SoftDeleteManager()

    class Meta:
        indexes = [
            models.Index(fields=["deleted_at"]),
        ]

    def __str__(self):
        return f"{self.userinfo.user.username} - {self.file.name}"

    fields = [
        "original_filename",
        "file",
    ]
