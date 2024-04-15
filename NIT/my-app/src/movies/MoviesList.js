import React from "react";
import { movieBox } from "./movieBox.js";
import "./movieStyle.css";

export function MovieList() {
	return (
		<>
			<movieBox title="Inception" year="1999" genre="thriler" />
		</>
	);
}
