from django.http import HttpResponseNotAllowed
from django.shortcuts import render, get_object_or_404, redirect
from .models import Post
from .forms.forms import PostForm


def post_list(request):
    posts = Post.objects.filter(is_deleted=False)
    return render(request, "posts/post_list.html", {"posts": posts})


def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, "posts/post_detail.html", {"post": post})


def post_create(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("post_list")
    else:
        form = PostForm()
    return render(request, "posts/post_form.html", {"form": form})


def post_update(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            return redirect("post_list")
    else:
        form = PostForm(instance=post)
    return render(request, "posts/post_form.html", {"form": form})


def post_delete(request, pk):
    post = get_object_or_404(Post, pk=pk)

    if request.method == "POST":
        post.is_deleted = True
        post.save()
        return redirect("post_list")

    return HttpResponseNotAllowed(["POST"])
