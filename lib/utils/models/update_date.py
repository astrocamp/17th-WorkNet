from django.db import models
from django.utils import timezone


class TimeStampedModel(models.Model):

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):

        if self.pk is not None:
            # 在每次保存時自動更新最後修改時間
            self.updated_at = timezone.now()

        # 調用父類的 save 方法
        super().save(*args, **kwargs)
