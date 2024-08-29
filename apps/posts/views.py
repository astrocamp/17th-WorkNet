from django.http import HttpResponseNotAllowed
from django.shortcuts import get_object_or_404, redirect, render
from django.utils import timezone

from .forms.forms import PostForm
from .models import Post


def index(request):
    posts = Post.objects.filter(deleted_at__isnull=True).order_by("-created_at")
    return render(request, "posts/index.html", {"posts": posts})


def show(request, id):
    post = get_object_or_404(Post, id=id)
    return render(request, "posts/show.html", {"post": post})


def new(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("posts:index")
    else:
        form = PostForm()
    return render(request, "posts/new.html", {"form": form})


def edit(request, id):
    post = get_object_or_404(Post, id=id)
    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            return redirect("posts:index")
    else:
        form = PostForm(instance=post)

    return render(request, "posts/edit.html", {"form": form, "post": post})


def delete(request, id):
    post = get_object_or_404(Post, id=id)

    if request.method == "POST":
        post.deleted_at = timezone.now()
        post.save()
        return redirect("posts:index")

    return HttpResponseNotAllowed(["POST"])
