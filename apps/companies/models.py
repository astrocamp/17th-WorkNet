from django.conf import settings
from django.db import models

from apps.users.models import User
from lib.models.soft_delete import SoftDeleteManager, SoftDeletetable


class Company(SoftDeletetable, models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, blank=False, null=True, related_name="company"
    )
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
    favorite = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name="company_favorite",
        through="CompanyFavorite",
    )

    objects = SoftDeleteManager()

    def is_favorited_by(self, user):
        return self.favorite.filter(id=user.id).exists()

    class Meta:
        indexes = [
            models.Index(fields=["deleted_at"]),
        ]


class CompanyFavorite(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="favorite_companies",
    )
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, related_name="favorited_by_users"
    )
    favorited_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = [
            "user",
            "company",
        ]
