from django.forms import ModelForm
from companys.models import Company


class CompanyForm(ModelForm):
    class Meta:
        model = Company
        fields = [
            "companys_title",
            "companys_tel",
            "companys_url",
            "companys_address",
            "companys_describe",
            "total_headcount",
            "name",
            "email",
            "tel",
        ]
        labels = {
            "companys_title": "公司名稱",
            "companys_tel": "公司電話",
            "companys_url": "公司網址",
            "companys_address": "公司地址",
            "companys_describe": "公司描述",
            "total_headcount": "員工人數",
            "name": "負責人姓名",
            "email": "負責人Email",
            "tel": "負責人電話",
        }
