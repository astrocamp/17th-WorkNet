# Generated by Django 5.1.1 on 2024-09-08 16:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0002_company_average_score'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='total_headcount',
            field=models.PositiveIntegerField(),
        ),
    ]
