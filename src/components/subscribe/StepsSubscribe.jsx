import React, { useState, useEffect } from "react";
import "./StepsSubscribe.css";

import PlanSteps from "../PlanSteps";

export default function StepsSubscribe() {
	return (
		<section className="container-steps-subscribe">
			<div className="plan-steps-subscribe">
				<PlanSteps headingClass="name-steps-subscribe" descriptionClass="description-steps-subscribe" />
			</div>
		</section>
	);
}
