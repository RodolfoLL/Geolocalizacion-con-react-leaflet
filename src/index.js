import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { Pruebita } from './Componnets/Prueba.js';
import { Mapa } from './Componnets/Maps';
import 'leaflet/dist/leaflet.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<div style={{ widt: '50vw', height: '50vw' }}>
		<Mapa />
	</div>
);
