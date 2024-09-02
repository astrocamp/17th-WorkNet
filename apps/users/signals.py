from django.dispatch import receiver
from django.contrib.auth.signals import user_logged_in
from django.shortcuts import redirect

@receiver(user_logged_in)
def redirect_to_identity_selection(sender, request, user, **kwargs):
    # 假設 CustomUser 模型中有 user_type 字段
    if user.user_type is None or user.user_type == '':  # 檢查用戶是否已經選擇身份
        return redirect('')  # 重定向到身份選擇頁面