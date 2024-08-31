from django.http import HttpResponseNotAllowed
from django.shortcuts import get_object_or_404, redirect, render
from django.utils import timezone

from .forms.forms import CommentForm, PostForm
from .models import Comment, Post


def index(request):
    posts = Post.objects.order_by("-created_at")
    return render(request, "posts/index.html", {"posts": posts})


def show(request, id):
    post = get_object_or_404(Post, id=id)
    comments = post.comments.order_by("-created_at")
    comment_form = CommentForm()

    if request.method == "POST":
        comment_form = CommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.post = post
            comment.save()
            return redirect("posts:show", id=post.id)

    return render(
        request,
        "posts/show.html",
        {"post": post, "comments": comments, "comment_form": comment_form},
    )


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


def comment_delete(request, id):
    comment = get_object_or_404(Comment, id=id)

    if request.method == "POST":
        comment.deleted_at = timezone.now()
        comment.save()
        return redirect("posts:show", id=comment.post.id)

    return HttpResponseNotAllowed(["POST"])
