import re
import markdown

from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()


@register.filter
@stringfilter
def convert_markdown(value):
    value = re.sub(r"==(.+?)==", r"<mark>\1</mark>", value)
    value = re.sub(r"~~(.+?)~~", r"<del>\1</del>", value)
    return markdown.markdown(value, extensions=["markdown.extensions.fenced_code"])
