# Generated by Django 5.1 on 2024-09-04 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_post_company_post_score_post_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='score',
            field=models.PositiveSmallIntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')], default=1),
        ),
    ]
