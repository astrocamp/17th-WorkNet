from django.core.exceptions import ValidationError
from django.forms import ModelForm
from django.forms.widgets import (
    EmailInput,
    FileInput,
    NumberInput,
    Textarea,
    TextInput,
    URLInput,
)
from PIL import Image

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
            "images",
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
            "images": FileInput(attrs={"class": "input-often-base"}),
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
            "images": "上傳圖片",
        }

    def clean_image(self):
        image = self.cleaned_data.get("images")

        if image.size > 50 * 1024:
            raise ValidationError("檔案容量不能超過50KB")

        try:
            img = Image.open(image)
            if img.width != 200 or img.height != 200:
                raise ValidationError("圖片尺寸必須是200x200像素")
        except Exception as e:
            raise ValidationError("無效的圖片檔案")

        return image
