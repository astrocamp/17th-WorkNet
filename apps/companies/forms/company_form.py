from django.forms import ModelForm
from django.forms.widgets import EmailInput, NumberInput, Textarea, TextInput, URLInput

from apps.companies.models import Company


class CompanyForm(ModelForm):
    class Meta:
        model = Company
        fields = [
            "title",
            "tel",
            "url",
            "address",
            "description",
            "employees",
            "name",
            "email",
        ]

        widgets = {
            "title": TextInput(attrs={"class": "w-full mt-1 input-often-base"}),
            "tel": TextInput(attrs={"class": "w-full mt-1 input-often-base"}),
            "url": URLInput(attrs={"class": "w-full mt-1 input-often-base"}),
            "address": TextInput(attrs={"class": "w-full mt-1 input-often-base"}),
            "description": Textarea(attrs={"class": "w-full mt-1 textarea-often-base"}),
            "employees": NumberInput(
                attrs={"class": "w-full mt-1 input-often-base"}
            ),
            "name": TextInput(attrs={"class": "w-full mt-1 input-often-base"}),
            "email": EmailInput(attrs={"class": "w-full mt-1 input-often-base"}),
            "owner_tel": TextInput(attrs={"class": "w-full mt-1 input-often-base"}),
        }

        labels = {
            "title": "公司名稱",
            "tel": "公司電話",
            "url": "公司網址",
            "address": "公司地址",
            "description": "公司描述",
            "employees": "員工人數",
            "name": "負責人姓名",
            "email": "負責人Email",
        }
