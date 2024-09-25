import requests
from django.conf import settings

LOCATION_CHOICES = [
    ("Keelung", "基隆"),
    ("Taipei", "台北"),
    ("New Taipei", "新北"),
    ("Taoyuan", "桃園"),
    ("Hsinchu", "新竹"),
    ("Miaoli", "苗栗"),
    ("Taichung", "台中"),
    ("Changhua", "彰化"),
    ("Nantou", "南投"),
    ("Yunlin", "雲林"),
    ("Chiayi", "嘉義"),
    ("Tainan", "台南"),
    ("Kaohsiung", "高雄"),
    ("Pingtung", "屏東"),
    ("Taitung", "台東"),
    ("Hualien", "花蓮"),
    ("Yilan", "宜蘭"),
    ("Penghu", "澎湖"),
    ("Kinmen", "金門"),
    ("Lienchiang", "連江"),
]


def fetch_coordinates(address):
    api_key = settings.GOOGLE_MAPS_API_KEY
    base_url = "https://maps.googleapis.com/maps/api/geocode/json"
    params = {"address": address, "key": api_key}

    response = requests.get(base_url, params=params)

    if response.status_code == 200:
        data = response.json()
        if data["results"]:
            location = data["results"][0]["geometry"]["location"]
            return location["lat"], location["lng"]
        return None, None
