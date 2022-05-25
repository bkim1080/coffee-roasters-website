import React from "react";
import PlanSteps from "../UI/PlanSteps";
import "./StepsSubscribe.css";

export default function StepsSubscribe() {
	return (
		<section className="container-steps-subscribe">
			<div className="contents-steps-subscribe">
				<PlanSteps headingClass="name-step-subscribe" descriptionClass="description-step-subscribe" />
			</div>
		</section>
	);
}
