import json
from collections import Counter

from django.shortcuts import render

from apps.jobs.models import Job


def index(request):
    jobs = Job.objects.values_list("skills", flat=True)
    skill_counter = Counter()
    for job_skills in jobs:
        skill_list = job_skills.split(",")
        skill_counter.update(skill_list)

    skill_counts_json = json.dumps(dict(skill_counter))  # 將 Counter 轉換為 JSON 字符串

    return render(
        request, "analytics/index.html", {"skill_counts_json": skill_counts_json}
    )


# job_counts = list(Job.objects.values("company__name").annotate(count=Count("id")))

# # 將數據轉換為 JSON 格式
# job_counts_json = json.dumps(job_counts, cls=DjangoJSONEncoder)

# # 將 JSON 傳遞給模板
# return render(request, "analytics/index.html", {"job_counts_json": job_counts_json})
