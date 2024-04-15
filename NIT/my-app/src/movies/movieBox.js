import React from "react";

export function movieBox({ title, year, genre }) {
	return (
		<>
			<div className="movieBox">
				<h1 className="movieName">{title}</h1>
				<h2 className="desc">{year}</h2>
				<h2 className="desc">{genre}</h2>
			</div>
		</>
	);
}
