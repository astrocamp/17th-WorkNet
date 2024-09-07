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
            "description",
            "employees",
            "name",
            "email",
        ]
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
