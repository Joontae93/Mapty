import 'leaflet/dist/leaflet';
const choctawHQ = [33.97382992138244, -96.3988494873047];

export const map = L.map('map', { center: choctawHQ, zoom: 17 });

export function displayMap() {
  L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  L.marker(choctawHQ).addTo(map).bindPopup('Choctaw HQ').openPopup(choctawHQ);
}
