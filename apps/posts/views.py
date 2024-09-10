from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render, reverse
from django.views.decorators.http import require_GET, require_http_methods, require_POST

from apps.companies.models import Company


from lib.models.paginate_queryset import paginate_queryset

from .forms.posts_form import CommentForm, PostForm
from .models import Comment, LikeLog, Post


def index(request):
    posts = Post.objects.order_by("-created_at")
    page_obj = paginate_queryset(request, posts, 10)
    return render(request, "posts/index.html", {"page_obj": page_obj})

@require_http_methods(["GET", "POST"])
def show(request, id):
    post = get_object_or_404(Post, id=id)
    comments = post.comments.order_by("-created_at")

    if request.method == "POST":
        comment_form = CommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.post = post
            comment.user = request.user
            comment.save()

            return render(
                request,
                "posts/comment.html",
                {"comment": comment, "remove_no_comment": True},
            )

    comment_form = CommentForm()
    is_like, is_dislike = get_reaction_status(post, request)

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


@login_required
@require_http_methods(["GET", "POST"])
def edit(request, id):
    post = get_object_or_404(Post, id=id)
    company = post.company

    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            return redirect(reverse("posts:show", args=[post.id]))
    else:
        form = PostForm(instance=post)

    return render(request, "posts/edit.html", {"form": form, "post": post})


@login_required
@require_POST
def delete(request, id):
    post = get_object_or_404(Post, id=id)
    company = post.company
    post.mark_delete()
    return redirect(reverse("companies:post_index", args=[company.id]))


@login_required
@require_http_methods(["POST"])
def comment_delete(request, id):
    comment = get_object_or_404(Comment, id=id)
    comment.mark_delete()
    return redirect("posts:show", id=comment.post.id)


@require_POST
def reaction(request, id):
    post = get_object_or_404(Post, pk=id)
    like_type = 1 if request.POST.get("type") == "like" else -1

    try:
        log = Post.published.reaction_by(post, request.user)
        if log.like_type == like_type:
            log.delete()
        else:
            log.like_type = like_type
            log.save()
    except:
        LikeLog.objects.create(user=request.user, post=post, like_type=like_type)
        pass

    post.like_cnt = Post.published.reactions_count(post, 1)
    post.dislike_cnt = Post.published.reactions_count(post, -1)
    post.save()

    is_like, is_dislike = get_reaction_status(post, request)

    return render(
        request,
        "posts/like.html",
        {
            "post": post,
            "is_like": is_like,
            "is_dislike": is_dislike,
        },
    )


def get_reaction_status(post, request):
    is_like = False
    is_dislike = False

    if request.user.is_authenticated:
        log = Post.published.reaction_by(post, request.user)
        if log:
            if 1 == log.like_type:
                is_like = True
            else:
                is_dislike = True

    return (is_like, is_dislike)
