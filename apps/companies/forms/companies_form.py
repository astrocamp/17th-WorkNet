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
            "title": TextInput(
                attrs={"class": "input-often-base", "placeholder": "請輸入公司名稱"}
            ),
            "tel": TextInput(
                attrs={"class": "input-often-base", "placeholder": "請輸入公司電話"}
            ),
            "url": URLInput(
                attrs={
                    "class": "input-often-base",
                    "placeholder": "http://",
                }
            ),
            "address": TextInput(
                attrs={"class": "input-often-base", "placeholder": "請輸入公司完整地址"}
            ),
            "description": Textarea(
                attrs={"class": "textarea-often-base", "placeholder": "請輸入公司描述"}
            ),
            "employees": NumberInput(attrs={"class": "input-often-base"}),
            "name": TextInput(
                attrs={"class": "input-often-base", "placeholder": "請輸入姓名"}
            ),
            "email": EmailInput(
                attrs={"class": "input-often-base", "placeholder": "請輸入email"}
            ),
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
