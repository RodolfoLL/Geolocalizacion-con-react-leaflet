import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import edificios from "../edificios.json";
import aulas from "../aulas.json";
const icon = L.icon({
	iconUrl: './placeholder.png',
	iconSize: [25, 30],
	popupAnchor:  [-2, -13]
});
const iconAula = L.icon({
	iconUrl: './Purple_Circle.png',
	iconSize: [10, 10],
	popupAnchor:  [-2, -10]
});
const position = [-17.3927,-66.14567];
export const Mapa = () => {
	return (
		<MapContainer
			center={position}
			zoom={18} maxZoom={18}
			scrollWheelZoom={false}
			style={{
				height: '70%',
				marginTop: '90px',
				marginBottom: '90px',
			}}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{edificios.map((edificio,idx)=>(
				<Marker
				 position={[edificio.lat,edificio.lng]}
				 icon={icon}
				 key={idx}
				
				>
					<Popup>
						<b>
							{edificio.nombre}
						</b>
						<br></br>						
						<b>
							latitud: {edificio.lat}
							<br></br>
							longitud: {edificio.lng}
						</b>
					</Popup>
				</Marker>
			))}
			{aulas.map((aula,idx)=>(
				<Marker
				 position={[aula.lat,aula.lng]}
				 icon={iconAula}
				 key={idx}
				
				>
					<Popup>
						<b>
							aula:{aula.nombre}
							<br></br>
							edificio:{aula.edificio}
							<br></br>
							
							piso:{aula.piso}
							<br></br>						
							latitud: {aula.lat}
							<br></br>
							longitud: {aula.lng}
						</b>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
};
