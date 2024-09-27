const GOOGLE_MAPS_API_KEY = 'AIzaSyA7m6yzWXzxrOAVT-NSWKJwa-XB9VKhb48';

document.addEventListener('DOMContentLoaded', async () => {
    const loadGoogleMaps = () => {
        return new Promise((resolve, reject) => {
            if (typeof google === 'object' && typeof google.maps === 'object') {
                resolve();
            } else {
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=marker`;
                script.async = true;
                script.defer = true;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            }
        });
    };

    const initializeMap = () => {
        const mapElement = document.getElementById('map');
        const coord_x = parseFloat(mapElement.getAttribute('data-latitude'));
        const coord_y = parseFloat(mapElement.getAttribute('data-longitude'));
        const company_title = mapElement.getAttribute('data-company-title');
        
        if (isNaN(coord_x) || isNaN(coord_y)) {
            mapElement.style.display = 'none';
            return;
        }

        const map = new google.maps.Map(mapElement, {
            zoom: 15,
            center: { lat: coord_x, lng: coord_y },
            mapId: 'ea72dbee4f91d537'
        });

        const marker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: coord_x, lng: coord_y },
            map: map,
            title: company_title
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${company_title}</h3>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    };

    try {
        await loadGoogleMaps();
        initializeMap();
    } catch (error) {
        console.error("加載錯誤:", error);
    }
});