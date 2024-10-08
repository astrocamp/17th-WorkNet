from django import forms
from django.core.exceptions import ValidationError
from django.forms.widgets import FileInput

from apps.resumes.models import Resume


class ResumeForm(forms.ModelForm):
    class Meta:
        model = Resume
        fields = [
            "file",
            "name",
            "original_filename",
        ]
        widgets = {
            "file": FileInput(
                attrs={
                    "class": "file-input file-input-bordered file-input-primary w-full"
                }
            ),
        }

    def clean_file(self):
        file = self.cleaned_data.get("file")
        if file:
            max_size_mb = 20
            if file.size > max_size_mb * 1024 * 1024:
                raise ValidationError(f"文件大小不能超過 {max_size_mb}MB")
            if not file.name.lower().endswith(".pdf"):
                raise ValidationError("只能上傳PDF檔案")
        return file
