from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout


def index(req):
    return render(req, "index.html")


def sign_in(req):
    if req.method == "POST":
        username = req.POST["username"]
        password = req.POST["password"]
        user = authenticate(username=username, password=password)

        if user is not None:
            login(req, user)
            return redirect("page:root")
        else:
            return redirect("page:sign_in")
    return render(req, "index.html")


def sign_out(req):
    if req.method == "POST":
        logout(req)
        return redirect("page:root")


def line_save_profile(backend, user, response, *args, **kwargs):
    print("======================")
    print(backend)
    print(user)
    print(response)
    # {'access_token': 'eyJhbGciOiJIUzI1NiJ9.eAvgd7-ezHzQ2YOlAIbY9F2bBSQ0X-3bl6J7MvqVLOgyX1bBhCilq9Drdgztsracv1PXscsL1O2saq3AQgjyX7Qds4Eptex7cUYExpSLH37e0a7jP28D8qO_i8VnuhJ9TfmQQ_7ISjAqGvX_sW8GFiZiM2EQ6Xeym-t7algUxAA.pQ_4CQmlgDQLByk_68aKpOViFPUSj6aJYb-teW95QZ8',
    #  'token_type': 'Bearer',
    #  'refresh_token': 'BRelArshq4X0A4zdCclg',
    #  'expires_in': 2592000,
    #  'scope': 'profile',
    #  'userId': 'U996511626c1f5ee31b64f73b328db40d',
    #  'displayName': '丁',
    #  'pictureUrl': 'https://profile.line-scdn.net/0h_B3hgJemAG0eESh-0jF-Em5BAwc9YFl_MHVHDC9FClV0IEBoMHZIDHkYXA0qcUc9MyJHC3gVWg8SAncLAEf8WRkhXVwiJkc-OndIgg'}
    if backend.name == "line":
        # profile = user.profile  # 假設你有一個用戶模型與 Profile 模型關聯
        # profile.line_user_id = response.get('userId')
        # profile.line_display_name = response.get('displayName')
        # profile.line_picture_url = response.get('pictureUrl')
        # profile.save()
        pass
