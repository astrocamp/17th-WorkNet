from django.conf import settings
from django.db import models
from taggit.managers import TaggableManager

from apps.companies.models import Company
from apps.resumes.models import Resume
from lib.models.soft_delete import SoftDeleteManager, SoftDeletetable
from lib.utils.models.defined import LOCATION_CHOICES


class Job(SoftDeletetable, models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="jobs")
    title = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField()
    location = models.CharField(max_length=100, choices=LOCATION_CHOICES)
    type = models.CharField(max_length=100, null=False, blank=False)
    skills = models.TextField(null=False, blank=False, default="")
    contact_info = models.TextField(null=False, blank=False)
    salary_range = models.TextField(null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, default=None)
    tenure = models.PositiveIntegerField()
    favorite = models.ManyToManyField(settings.AUTH_USER_MODEL, through="JobFavorite")
    resumes = models.ManyToManyField(Resume, through="Job_Resume")
    tags = TaggableManager()

    objects = SoftDeleteManager()

    def __str__(self):
        return f"{self.title}"

    class Meta:
        db_table = "company_job"


class JobFavorite(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="user_favorite",
    )
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name="favorited_by")
    favorited_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} favorited {self.job.title}"

    class Meta:
        db_table = "favorite_job"
        unique_together = [
            "user",
            "job",
        ]


class Job_Resume(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name="job_resume")
    resume = models.ForeignKey(
        Resume, on_delete=models.CASCADE, related_name="resume_job"
    )
    created_at = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=20, default="applied")
    read_at = models.DateTimeField(null=True, blank=True)
