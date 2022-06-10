import React from "react";
import "./Button.css";

export default function Button(props) {
	return (
		<button onClick={props.onClick} className={`button ${props.className ? props.className : ""}`}>
			{props.children}
		</button>
	);
}
