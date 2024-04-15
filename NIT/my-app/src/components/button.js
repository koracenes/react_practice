import React from "react";

export function Button({bgColor, txtColor, text}) {
	return (
		<>
			<Button style={{ backgroundColor: bgColor, color: txtColor }}>
				{text}
			</Button>
		</>
	);
}
