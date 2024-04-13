import React from "react";

export function Button(props) {
	return (
		<>
			<button style={{ color: props.slova, backgroundColor: props.pozadina }}>
				{props.text}
			</button>
		</>
	);
}
