import React from "react";
import "./Option.css";

export default function Option(props) {
	return (
		<div className="container-option">
			<div className="contents-option">
				<h4 className="heading-option">{props.option.option}</h4>
				<p className="description-option">{props.option.description}</p>
			</div>
		</div>
	);
}
