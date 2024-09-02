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

    is_like, is_dislike = get_like_status(id, request.user.pk)

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

    user_id = request.user.pk
    if request.method == "POST":
        post = get_object_or_404(Post, pk=id)

        if request.POST.get("type") == "like":
            like_type = 1
        else:
            like_type = -1

        try:
            log = LikeLog.objects.get(post_id=id, user_id=user_id)
            if log.like_type == like_type:
                log.delete()
            else:
                log.like_type = like_type
                log.save()

        except LikeLog.DoesNotExist:
            log = LikeLog(post_id=id, user_id=user_id, like_type=like_type)
            log.save()

        post.like_cnt = LikeLog.objects.filter(post_id=id, like_type=1).count()
        post.dislike_cnt = LikeLog.objects.filter(post_id=id, like_type=-1).count()
        post.save()

        is_like, is_dislike = get_like_status(id, user_id)

        return render(
            request,
            "posts/like.html",
            {
                "post": post,
                "is_like": is_like,
                "is_dislike": is_dislike,
            },
        )


def get_like_status(post_id, user_id):
    is_like = False
    is_dislike = False
    try:
        log = LikeLog.objects.get(post_id=post_id, user_id=user_id)
        if 1 == log.like_type:
            is_like = True
        else:
            is_dislike = True

    except LikeLog.DoesNotExist:
        pass

    return (is_like, is_dislike)
