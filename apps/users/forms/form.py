from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms import ModelForm
from django.forms.widgets import DateInput, Select, TextInput

from ..models import User, UserInfo


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User

        fields = ("username", "password1", "password2", "email", "type")
        widgets = {"type": forms.Select(choices=User.type_choices)}


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
            "nickname": TextInput(attrs={"required": "required"}),
            "tel": TextInput(attrs={"pattern": r"\d{10,15}"}),
            "location": Select(),
            "birth": DateInput(),
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
