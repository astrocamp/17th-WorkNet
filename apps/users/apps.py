import rules
from django.apps import AppConfig

from .rules import user_can_view


class UsersConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.users"

    def ready(self):
        rules.add_rule("user_can_view", user_can_view)
