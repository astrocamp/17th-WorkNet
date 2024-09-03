from django.http import HttpResponseNotAllowed
from django.shortcuts import get_object_or_404, redirect, render
from django.utils import timezone

from .forms.form import CommentForm, PostForm
from .models import Comment, Post, LikeLog


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

    if request.user.is_authenticated:
        is_like, is_dislike = get_like_status(post, request.user)
    else:
        is_like = False
        is_dislike = False

    return render(
        request,
        "posts/show.html",
        {
            "post": post,
            "comments": comments,
            "comment_form": comment_form,
            "is_like": is_like,
            "is_dislike": is_dislike,
        },
    )


def new(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.user = request.user
            post.save()

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


def like(request, id):

    if request.method == "POST":
        post = get_object_or_404(Post, pk=id)

        if request.POST.get("type") == "like":
            like_type = 1
        else:
            like_type = -1

        log = post.liked_by(request.user)

        if log:
            if log.like_type == like_type:
                log.delete()
            else:
                log.like_type = like_type
                log.save()
        else:
            LikeLog.objects.create(user=request.user, post=post, like_type=like_type)

        post.like_cnt = post.liked.filter(likelog__like_type=1).count()
        post.dislike_cnt = post.liked.filter(likelog__like_type=-1).count()
        post.save()

        if request.user.is_authenticated:
            is_like, is_dislike = get_like_status(post, request.user)
        else:
            is_like = False
            is_dislike = False

        return render(
            request,
            "posts/like.html",
            {
                "post": post,
                "is_like": is_like,
                "is_dislike": is_dislike,
            },
        )


def get_like_status(post, user):
    is_like = False
    is_dislike = False

    log = post.liked_by(user)
    if log:
        if 1 == log.like_type:
            is_like = True
        else:
            is_dislike = True

    return (is_like, is_dislike)
