
server:
	poetry run python manage.py runserver

shell:
	poetry run python manage.py shell_plus --print-sql

migration:
	poetry run python manage.py makemigrations

migrate:
	poetry run python manage.py migrate

routes:
	poetry run python manage.py show_urls

lint:
	poetry run pre-commit run --all-files

commit:
	poetry run cz commit