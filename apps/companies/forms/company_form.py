from django.forms import ModelForm

from apps.companies.models import Company


class CompanyForm(ModelForm):
    class Meta:
        model = Company
        fields = [
            "title",
            "tel",
            "url",
            "address",
            "describe",
            "total_headcount",
            "name",
            "email",
            "owner_tel",
        ]
        labels = {
            "title": "公司名稱",
            "tel": "公司電話",
            "url": "公司網址",
            "address": "公司地址",
            "describe": "公司描述",
            "total_headcount": "員工人數",
            "name": "負責人姓名",
            "email": "負責人Email",
            "owner_tel": "負責人電話",
        }
