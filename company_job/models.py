from django.db import models

# Create your models here.

class Job(models.Model):
    LOCATION_CHOICES =[
        ('Keelung', '基隆'),
        ('Taipei', '台北'),
        ('New Taipei', '新北'),
        ('Taoyuan', '桃園'),
        ('Hsinchu', '新竹'),
        ('Miaoli', '苗栗'),
        ('Taichung', '台中'),
        ('Changhua', '彰化'),
        ('Nantou', '南投'),
        ('Yunlin', '雲林'),
        ('Chiayi', '嘉義'),
        ('Tainan', '台南'),
        ('Kaohsiung', '高雄'),
        ('Pingtung', '屏東'),
        ('Taitung', '台東'),
        ('Hualien', '花蓮'),
        ('Yilan', '宜蘭'),
        ('Penghu', '澎湖'),
        ('Kinmen', '金門'),
        ('Lienchiang', '連江'),
    ]
    job_title = models.CharField(max_length=100, null=False, blank=False)
    job_description = models.TextField()
    job_location = models.CharField(max_length=100, choices=LOCATION_CHOICES)
    job_type = models.CharField(max_length=100, null=False, blank=False)
    jon_skills = models.TextField(null=False, blank=False)
    job_contact_info = models.TextField(null=False, blank=False)
    job_salary_range = models.TextField(null=False, blank=False)
    job_post_date = models.DateField(auto_now_add=True)
    job_tenure = models.PositiveIntegerField()

    class Meta:
        db_table = 'job_details'
