# Generated by Django 5.1 on 2024-09-02 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0005_user_user_type_alter_userinfo_user"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="user_type",
            field=models.PositiveSmallIntegerField(
                choices=[(1, "user"), (2, "company")]
            ),
        ),
    ]