import re

from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.forms import ModelForm
from django.forms.widgets import DateInput, Select, TextInput

from ..models import User, UserInfo


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User

        fields = ("username", "password1", "password2", "email", "type")

        widgets = {"type": forms.Select(choices=User.roles_choice)}

    def clean_email(self):
        email = self.cleaned_data.get("email")

        if not email:
            raise ValidationError("請使用有效的電子郵件地址。")

        if not re.match(
            r"^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail)\.com$", email
        ):
            raise ValidationError(
                "目前僅支援 Gmail、Yahoo、Outlook 或 Hotmail 的電子郵件地址。"
            )

        return email


class UserInfoForm(ModelForm):
    class Meta:
        model = UserInfo

        fields = ["nickname", "tel", "location", "birth"]
        labels = {
            "nickname": "姓名",
            "tel": "手機",
            "location": "地區",
            "birth": "生日",
        }

        widgets = {
            "nickname": TextInput(
                attrs={
                    "required": "required",
                    "class": "mt-1 input-often-base",
                }
            ),
            "tel": TextInput(
                attrs={
                    "pattern": r"\d{10,15}",
                    "class": "mt-1 input-often-base",
                }
            ),
            "location": Select(attrs={"class": "mt-1 input-often-base"}),
            "birth": DateInput(
                attrs={"type": "date", "class": "mt-1 input-often-base"}
            ),
        }


class PasswordResetForm(forms.Form):
    username = forms.CharField(label="帳號", max_length=150)
    email = forms.EmailField(label="電子郵件", max_length=254)

    def clean(self):
        cleaned_data = super().clean()
        username = cleaned_data.get("username")
        email = cleaned_data.get("email")
        User = get_user_model()

        if not User.objects.filter(username=username, email=email).exists():
            raise forms.ValidationError("此帳號與電子郵件不匹配")
        return cleaned_data
