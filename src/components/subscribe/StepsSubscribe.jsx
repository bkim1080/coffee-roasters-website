import React from "react";
import Steps from "../shared/Steps";
import "./StepsSubscribe.css";

export default function StepsSubscribe() {
	return (
		<section className="container-steps-subscribe">
			<div className="contents-steps-subscribe">
				<Steps headingClass="heading-step-subscribe" descriptionClass="description-step-subscribe" />
			</div>
		</section>
	);
}
