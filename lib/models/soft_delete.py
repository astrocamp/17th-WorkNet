from django.db import models
from django.utils import timezone

# Create your models here.

class SoftDeleteManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(delete_at=None)


class SoftDeletetable:
      def mark_delete(self):
        self.delete_at = timezone.now()
        self.save()

      objects = SoftDeleteManager() 

      class Meta:
        abstract = True