import React from "react";
import "./Step.css";

export default function PlanStep(props) {
	return (
		<div className="container-step">
			<div className="content-step">
				<p className="num-step">{props.num}</p>
				<h3 className={props.headingClass}>{props.heading}</h3>
				<p className={props.descriptionClass}>{props.description}</p>
			</div>
		</div>
	);
}
