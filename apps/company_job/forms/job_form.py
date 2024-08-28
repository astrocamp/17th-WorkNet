from django.forms import ModelForm
from django.forms.widgets import NumberInput, Select, Textarea, TextInput

from apps.company_job.models import Job


class JobForm(ModelForm):
    class Meta:
        model = Job

        fields = [
            "title",
            "description",
            "location",
            "type",
            "skills",
            "contact_info",
            "salary_range",
            "tenure",
        ]

        widgets = {
            "title": TextInput(attrs={"class": "form-control"}),
            "description": Textarea(attrs={"class": "form-control"}),
            "location": Select(attrs={"class": "form-control"}),
            "type": TextInput(attrs={"class": "form-control"}),
            "skills": Textarea(attrs={"class": "form-control"}),
            "contact_info": Textarea(attrs={"class": "form-control"}),
            "salary_range": TextInput(attrs={"class": "form-control"}),
            "tenure": NumberInput(attrs={"class": "form-control"}),
        }

        labels = {
            "title": "職缺名稱",
            "description": "職缺描述",
            "location": "工作地點",
            "type": "工作類型",
            "skills": "技能要求",
            "contact_info": "聯絡方式",
            "salary_range": "薪資範圍",
            "tenure": "年資",
        }
