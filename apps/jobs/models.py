from django.db import models
from lib.models.soft_delete import SoftDeletetable, SoftDeleteManager

# Create your models here.


class Job(SoftDeletetable, models.Model):
    LOCATION_CHOICES = [
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
    ]
    title = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField()
    location = models.CharField(max_length=100, choices=LOCATION_CHOICES)
    type = models.CharField(max_length=100, null=False, blank=False)
    skills = models.TextField(null=False, blank=False)
    contact_info = models.TextField(null=False, blank=False)
    salary_range = models.TextField(null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, default=None)
    tenure = models.PositiveIntegerField()

    objects = SoftDeleteManager()

    def __str__(self):
        return f"{self.title}"

    class Meta:
        db_table = "job_details"
