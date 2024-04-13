import React from "react";

export function Card(props) {
	return (
		<>
			<div className="cardBox">
				<img className="img" src={props.img} alt="slika" />
				<h1 className="cardH1">{props.ime}</h1>
				<p className="cardText">{props.text}</p>
			</div>
		</>
	);
}
