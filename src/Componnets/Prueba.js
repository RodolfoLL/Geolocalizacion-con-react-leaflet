import React, { useState } from 'react';

export const Pruebita = () => {
	const sumar = () => {
		setcontador(contador + 1);
	};
	const restar = () => {
		setcontador(contador - 1);
	};
	const reset = () => {
		setcontador(0);
	};
	const [contador, setcontador] = useState(0);
	return (
		<div>
			<h1>Contador</h1>
			{contador}
			<br />
			<button onClick={sumar}>Sumar</button>{' '}
			<button onClick={restar}>restar</button>
			<button onClick={reset}>reset</button>
		</div>
	);
};
