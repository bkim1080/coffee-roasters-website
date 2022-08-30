import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
	return (
		<button
			disabled={props.disabled}
			onClick={props.onClick}
			className={`${styles.button} ${props.className ? props.className : ""}`}
		>
			{props.children}
		</button>
	);
}
