import React from "react";

//PROPS: prosledjivanje iz parametara iz komponente u komponentu
// Mora da je reusable
export function Pozdrav(props) {
	return (
		<>
			<h1>
				Pozdrav, {props.ime} {props.prezime}
			</h1>
			<h2>godine: {props.godine}</h2>
			<h2>grad: {props.grad}</h2>
		</>
	);
}
