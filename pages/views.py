# Create your views here.
from django.contrib.auth.models import User
from django.shortcuts import render

# Create your views here.


def home(req):
    return render(req, "home.html")


# def google_save_profile(backend, user, response, *args, **kwargs):
#     if backend.name == 'google-oauth2':
#         # 从 Google 的响应数据中获取用户信息
#         email = response.get('email')
#         first_name = response.get('given_name')
#         last_name = response.get('family_name')
#         username=response.get('user_name')

#         # 更新用户的 email, first_name, last_name
#         user.email = email if email else user.email
#         user.first_name = first_name if first_name else user.first_name
#         user.last_name = last_name if last_name else user.last_name
#         user.username = username if username else user.username


#         # 保存用户
#         user.save()
