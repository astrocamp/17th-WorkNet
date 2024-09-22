import os
from pathlib import Path

import dj_database_url
import django_heroku
from django.urls import reverse_lazy

from lib.utils.env import is_dev

if is_dev():
    from dotenv import load_dotenv

    load_dotenv()


MAILGUN_API_URL = os.getenv("MAILGUN_API_URL")
MAILGUN_API_KEY = os.getenv("MAILGUN_API_KEY")
MAILGUN_SENDER_DOMAIN = os.getenv("MAILGUN_SENDER_DOMAIN")
EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER")
EMAIL_FROM = os.getenv("EMAIL_FROM")
DEFAULT_FROM_EMAIL = os.getenv("DEFAULT_FROM_EMAIL")


ANYMAIL = {
    "MAILGUN_API_KEY": MAILGUN_API_KEY,
    "MAILGUN_SENDER_DOMAIN": MAILGUN_SENDER_DOMAIN,
}


EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.mailgun.org"
EMAIL_PORT = 587
EMAIL_USE_TLS = True


EMAIL_HOST_USER = EMAIL_HOST_USER
EMAIL_HOST_PASSWORD = MAILGUN_API_KEY
DEFAULT_FROM_EMAIL = DEFAULT_FROM_EMAIL


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv("APP_SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = is_dev()

NGROK_HOSTS = os.getenv("NGROK_HOSTS")

ALLOWED_HOSTS = ["127.0.0.1", "localhost", NGROK_HOSTS, "worknet.herokuapp.com"]
AUTH_USER_MODEL = "users.User"

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "apps.companies",
    "apps.jobs",
    "apps.posts",
    "apps.users",
    "apps.resumes",
    "apps.analytics",
    "anymail",
    "storages",
    "social_django",
    "rules",
    "taggit",
    "whitenoise.runserver_nostatic",
]
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = os.getenv("GOOGLE_KEY")
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = os.getenv("GOOGLE_SECRET")
GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")


if is_dev():
    INSTALLED_APPS += [
        "django_extensions",
        "debug_toolbar",
    ]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "social_django.middleware.SocialAuthExceptionMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
]

if is_dev():
    MIDDLEWARE += [
        "debug_toolbar.middleware.DebugToolbarMiddleware",
    ]


ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "apps.users.context_processors.notifications_processor",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": os.getenv("DB_ENGINE"),
        "NAME": os.getenv("DB_NAME"),
        "USER": os.getenv("DB_USER"),
        "PASSWORD": os.getenv("DB_PASSWORD"),
        "HOST": os.getenv("DB_HOST"),
        "PORT": os.getenv("DB_PORT"),
    }
}

db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES["default"].update(db_from_env)

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    # {
    #     "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    # },
    # {
    #     "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    # },
    # {
    #     "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    # },
    # {
    #     "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    # },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "Asia/Taipei"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
STATIC_URL = "/static/"
STATICFILES_DIRS = [
    BASE_DIR / "static",
]

LOGIN_URL = reverse_lazy("users:sign_in")

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

AUTHENTICATION_BACKENDS = (
    "rules.permissions.ObjectPermissionBackend",
    "social_core.backends.line.LineOAuth2",
    "social_core.backends.google.GoogleOAuth2",
    "django.contrib.auth.backends.ModelBackend",
)

SOCIAL_AUTH_LINE_KEY = os.getenv("LINE_KEY")
SOCIAL_AUTH_LINE_SECRET = os.getenv("LINE_SECRET")

SOCIAL_AUTH_LOGIN_REDIRECT_URL = "/login_redirect/"
SOCIAL_AUTH_LOGIN_URL = "/"
SOCIAL_AUTH_URL_NAMESPACE = "social"


SOCIAL_AUTH_PIPELINE = (
    "social_core.pipeline.social_auth.social_details",
    "social_core.pipeline.social_auth.social_uid",
    "social_core.pipeline.social_auth.auth_allowed",
    "social_core.pipeline.social_auth.social_user",
    "social_core.pipeline.user.get_username",
    "social_core.pipeline.user.create_user",
    "social_core.pipeline.social_auth.associate_user",
    "social_core.pipeline.social_auth.load_extra_data",
    "social_core.pipeline.user.user_details",
    "apps.users.views.social_save_profile",
)


AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME = os.getenv("AWS_STORAGE_BUCKET_NAME")
AWS_S3_REGION_NAME = os.getenv("AWS_S3_REGION_NAME")
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
AWS_S3_SIGNATURE_VERSION = "s3v4"
AWS_S3_CUSTOM_DOMAIN = f"{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com"


STORAGES = {
    "default": {
        "BACKEND": "storages.backends.s3.S3Storage",
    },
    "staticfiles": {
        "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage",
    },
}

django_heroku.settings(locals())
