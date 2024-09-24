from django.db.models import Sum
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from apps.posts.models import Post


@receiver(post_save, sender=Post)
@receiver(post_delete, sender=Post)
def calc_score(sender, instance, created, **kwargs):
    company = instance.company
    posts = Post.objects.filter(company=company)
    post_count = posts.count()
    post_score = posts.aggregate(score=Sum("score"))["score"]

    if post_count > 0:
        average_score = post_score / post_count
    else:
        average_score = 0

    company.score = average_score
    company.save()
