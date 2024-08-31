from django import forms

from apps.posts.models import Comment, Post


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = [
            "title",
            "content",
        ]
        labels = {
            "title": "標題",
            "content": "內文",
        }


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = [
            "content",
        ]
        labels = {
            "content": "內文",
        }
