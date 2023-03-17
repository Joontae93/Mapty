import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const choctawHQ = [33.97382992138244, -96.3988494873047];

export function Map() {
  return (
    <MapContainer id="map" center={choctawHQ} zoom={17} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={choctawHQ}>
        <Popup>Choctaw HQ</Popup>
      </Marker>
    </MapContainer>
  );
}
