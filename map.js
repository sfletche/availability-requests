const map = L.map('map').setView([37.5, -120.5], 6);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
