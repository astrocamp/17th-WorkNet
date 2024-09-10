from django.forms import ModelForm
from django.forms.widgets import NumberInput, Select, Textarea, TextInput

from apps.jobs.models import Job


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
            "title": TextInput(attrs={"class": "mt-1 input-often-base"}),
            "description": Textarea(attrs={"class": "mt-1 textarea-often-base"}),
            "location": Select(attrs={"class": "mt-1 input-often-base"}),
            "type": TextInput(attrs={"class": "mt-1 input-often-base"}),
            "skills": Textarea(attrs={"class": "mt-1 textarea-often-base"}),
            "contact_info": Textarea(attrs={"class": "mt-1 textarea-often-base"}),
            "salary_range": TextInput(attrs={"class": "mt-1 input-often-base"}),
            "tenure": NumberInput(attrs={"class": "mt-1 input-often-base"}),
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
