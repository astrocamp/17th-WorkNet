import os

from django.core.exceptions import ValidationError
from django.forms import ModelForm
from django.forms.widgets import EmailInput, FileInput, NumberInput, Textarea, TextInput, URLInput
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

        error_messages = {
            "images": {
                "invalid_image": "請上傳有效的圖片檔案。您上傳的檔案不是圖片或圖片已損壞。",
            }
        }

    def clean_images(self):
        image = self.cleaned_data.get("images")

        if not image:
            return image

        if image.size > 2 * 1024 * 1024:
            raise ValidationError("檔案大小不能超過2MB")

        valid_extensions = ["jpg", "jpeg", "png", "bmp", "webp"]
        ext = os.path.splitext(image.name)[1][1:].lower()
        if ext not in valid_extensions:
            raise ValidationError(
                f"不支援的檔案格式，僅接受以下格式: {', '.join(valid_extensions)}"
            )

        try:
            img = Image.open(image)
            img.verify()
        except Exception as e:
            raise ValidationError("無效的圖片檔案或檔案損壞")

        return image
