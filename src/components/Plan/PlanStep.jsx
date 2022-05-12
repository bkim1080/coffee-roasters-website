import React from "react";
import "./PlanStep.css";

export default function PlanStep(props) {
	return (
		<div className="container-plan-step">
			<div className="content-plan-step">
				<p className="num-plan-step">{props.num}</p>
				<p className="name-plan-step">{props.name}</p>
				<p className="description-plan-step">{props.description}</p>
			</div>
		</div>
	);
}
