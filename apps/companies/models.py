from django.db import models

from lib.models.soft_delete import SoftDeleteManager, SoftDeletetable


# Create your models here.
class Company(SoftDeletetable, models.Model):
    title = models.CharField(max_length=200)
    tel = models.CharField(max_length=15)
    url = models.URLField()
    address = models.CharField(max_length=300)
    describe = models.TextField()
    total_headcount = models.IntegerField()
    name = models.CharField(max_length=200)
    email = models.EmailField()
    owner_tel = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(default=None, null=True)

    average_score = models.DecimalField(max_digits=5, decimal_places=1, default=0.0)

    objects = SoftDeleteManager()

    class Meta:
        indexes = [
            models.Index(fields=["deleted_at"]),
        ]
