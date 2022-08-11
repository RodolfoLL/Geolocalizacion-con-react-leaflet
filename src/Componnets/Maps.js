import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = L.icon({
	iconUrl: './placeholder.png',
	iconSize: [38, 38],
});

const position = [51.505, -0.09];
export const Mapa = () => {
	return (
		<MapContainer
			center={position}
			zoom={13}
			scrollWheelZoom={false}
			style={{
				height: '100%',
				marginTop: '80px',
				marginBottom: '90px',
			}}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={position} icon={icon}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
};
