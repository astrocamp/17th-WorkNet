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
    html = markdown.markdown(value, extensions=["markdown.extensions.fenced_code"])

    def replace_linebreaks_outside_code(match):
        content = match.group(2)
        return match.group(1) + content.replace("\n", "<br>\n")

    html = re.sub(
        r"(<(?!pre|code)[^>]+>)([^<]+)", replace_linebreaks_outside_code, html
    )

    html = html.replace("</p>", "")
    return html
