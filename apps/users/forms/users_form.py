import re

from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.forms import ModelForm
from django.forms.widgets import DateInput, Select, TextInput
from taggit.forms import TagField

from ..models import User, UserInfo


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User

        fields = ("username", "password1", "password2", "email", "type")

        widgets = {"type": forms.Select(choices=User.roles_choice)}

    error_messages = {
        "password_mismatch": "兩次輸入的密碼不一致，請重新輸入。",
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["username"].error_messages["required"] = "帳號不能為空白。"
        self.fields["email"].error_messages["required"] = "請使用有效的電子郵件地址。"

    def clean_email(self):
        email = self.cleaned_data.get("email")

        if not email:
            raise ValidationError("請使用有效的電子郵件地址。")

        if not re.match(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", email):
            raise ValidationError("請使用有效的電子郵件地址。")

        return email

    def clean_username(self):
        username = self.cleaned_data.get("username")

        if username is None:
            raise ValidationError("帳號不能為空白。")

        if User.objects.filter(username=username).exists():
            raise ValidationError("該帳號已被註冊，請選擇其他帳號。")
        return username


class UserInfoForm(ModelForm):

    class Meta:
        model = UserInfo

        fields = ["nickname", "tel", "location", "tags", "birth"]
        labels = {
            "nickname": "姓名",
            "tel": "手機",
            "location": "地區",
            "tags": "具備的技能",
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

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field_name in self.fields:
            if field_name != "birth":
                self.fields[field_name].required = True

        self.fields["nickname"].error_messages["required"] = "姓名不能為空。"
        self.fields["tel"].error_messages["required"] = "手機號碼不能為空。"
        self.fields["location"].error_messages["required"] = "地區不能為空。"
        self.fields["tags"].error_messages["required"] = "技能標籤不能為空。"


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
