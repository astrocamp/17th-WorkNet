# Generated by Django 5.1.1 on 2024-09-13 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resumes', '0002_remove_resume_user_resume_userinfo'),
        ('users', '0008_alter_userinfo_updated_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='name',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddIndex(
            model_name='resume',
            index=models.Index(fields=['deleted_at'], name='resumes_res_deleted_d99b05_idx'),
        ),
    ]
