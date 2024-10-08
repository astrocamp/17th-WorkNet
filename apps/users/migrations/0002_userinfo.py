# Generated by Django 5.1 on 2024-08-30 13:25

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="UserInfo",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nickname", models.CharField(max_length=30)),
                ("tel", models.CharField(max_length=15)),
                (
                    "location",
                    models.CharField(
                        choices=[
                            ("Keelung", "基隆"),
                            ("Taipei", "台北"),
                            ("New Taipei", "新北"),
                            ("Taoyuan", "桃園"),
                            ("Hsinchu", "新竹"),
                            ("Miaoli", "苗栗"),
                            ("Taichung", "台中"),
                            ("Changhua", "彰化"),
                            ("Nantou", "南投"),
                            ("Yunlin", "雲林"),
                            ("Chiayi", "嘉義"),
                            ("Tainan", "台南"),
                            ("Kaohsiung", "高雄"),
                            ("Pingtung", "屏東"),
                            ("Taitung", "台東"),
                            ("Hualien", "花蓮"),
                            ("Yilan", "宜蘭"),
                            ("Penghu", "澎湖"),
                            ("Kinmen", "金門"),
                            ("Lienchiang", "連江"),
                        ],
                        max_length=100,
                    ),
                ),
                ("birth", models.DateField()),
                ("points", models.IntegerField(blank=True, default=0)),
                ("updated_at", models.DateTimeField()),
                (
                    "user",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
