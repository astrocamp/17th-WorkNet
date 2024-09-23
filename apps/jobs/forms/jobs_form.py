from django.forms import ModelForm
from django.forms.widgets import NumberInput, Select, Textarea, TextInput
from taggit.forms import TagField

from apps.jobs.models import Job


class JobForm(ModelForm):
    tags = TagField(
        widget=TextInput(attrs={"class": "mt-1 input-often-base", "id": "tag-input"})
    )

    class Meta:
        model = Job

        fields = [
            "title",
            "type",
            "location",
            "tenure",
            "salary_range",
            "contact_info",
            "description",
            "tags",
        ]

        widgets = {
            "title": TextInput(
                attrs={"class": "input-often-base", "placeholder": "請輸入職缺名稱"}
            ),
            "salary_range": TextInput(
                attrs={"class": "input-often-base", "placeholder": "請輸入薪資範圍"}
            ),
            "type": TextInput(
                attrs={"class": "input-often-base", "placeholder": "請輸入工作類型"}
            ),
            "description": Textarea(
                attrs={"class": "textarea-often-base", "placeholder": "請輸入職缺描述"}
            ),
            "location": Select(attrs={"class": "input-often-base"}),
            "contact_info": Textarea(
                attrs={
                    "class": "textarea-often-base",
                    "placeholder": "請輸入電話或Email",
                }
            ),
            "tenure": NumberInput(
                attrs={"class": "input-often-base", "placeholder": "請輸入所要年資"}
            ),
        }

        labels = {
            "title": "職缺名稱",
            "description": "職缺描述",
            "location": "工作地點",
            "type": "工作類型",
            "tags": "所需技能",
            "contact_info": "聯絡方式",
            "salary_range": "薪資範圍",
            "tenure": "年資",
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["tags"].label = "所需技能"
