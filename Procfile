web: gunicorn config.wsgi
release: bash -c "python manage.py migrate && python manage.py collectstatic --noinput"