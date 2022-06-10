import React from "react";
import PlanSteps from "../PlanSteps";
import "./StepsSubscribe.css";

export default function StepsSubscribe() {
	return (
		<section className="container-steps-subscribe">
			<div className="contents-steps-subscribe">
				<PlanSteps headingClass="name-steps-subscribe" descriptionClass="description-steps-subscribe" />
			</div>
		</section>
	);
}
