import React from "react";
import { stepsList } from "../../data";
import "./PlanSteps.css";

export default function PlanSteps(props) {
	return (
		<div className="container-plan-steps">
			{stepsList.map((step) => {
				return (
					<div key={step.id}>
						<div className="content-step">
							<p className="num-step">{step.num}</p>
							<h3 className={`name-step ${props.headingClass}`}>{step.name}</h3>
							<p className={`description-step ${props.descriptionClass}`}>{step.description}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
