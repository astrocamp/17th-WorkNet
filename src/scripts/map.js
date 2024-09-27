document.addEventListener('DOMContentLoaded', () => {
    const initializeMap = () => {
        const mapElement = document.getElementById('map');
        const errorElement = document.getElementById('map-error');
        const coord_x = parseFloat(mapElement.getAttribute('data-latitude'));
        const coord_y = parseFloat(mapElement.getAttribute('data-longitude'));
        const company_title = mapElement.getAttribute('data-company-title');
        
        if (isNaN(coord_x) || isNaN(coord_y)) {
            mapElement.style.display = 'none';
            errorElement.style.display = 'block';
            return;
        }


        const map = new google.maps.Map(mapElement, {
            zoom: 15,
            center: { lat: coord_x, lng: coord_y },
            mapId:'ea72dbee4f91d537'
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


    if (typeof google === 'object' && typeof google.maps === 'object') {
        initializeMap();
    } else {
        window.addEventListener('load', initializeMap);
    }
});