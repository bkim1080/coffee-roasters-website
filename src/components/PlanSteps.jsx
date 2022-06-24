import React from "react";
import { stepsList } from "../data";
import "./PlanSteps.css";

export default function PlanSteps(props) {
	return (
		<div className="container-steps">
			{stepsList.map((step) => {
				return (
					<div key={step.id}>
						<p className="number-step">{step.num}</p>
						<h3 className={`name-step ${props.headingClass}`}>{step.name}</h3>
						<p className={`description-step ${props.descriptionClass}`}>{step.description}</p>
					</div>
				);
			})}
		</div>
	);
}
