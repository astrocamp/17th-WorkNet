from django.apps import AppConfig


class CompanyJobConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.jobs"

    def ready(self):
        import apps.jobs.rules
        import apps.jobs.signals
