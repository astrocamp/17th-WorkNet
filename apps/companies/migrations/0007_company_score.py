# Generated by Django 5.1.1 on 2024-09-23 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("companies", "0006_alter_company_user"),
    ]

    operations = [
        migrations.AddField(
            model_name="company",
            name="score",
            field=models.DecimalField(
                blank=True, decimal_places=1, max_digits=2, null=True
            ),
        ),
    ]
