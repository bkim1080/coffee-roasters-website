import React from "react";
import Steps from "../shared/Steps";
import "./HowItWorks.css";

export default function Plan() {
	return (
		<section className="container-howitworks">
			<h4 className="heading-howitworks">How it works</h4>
			<div className="steps-howitworks">
				<Steps headingClass="heading-step-home" descriptionClass="description-step-home" />
			</div>
			<button className="button-howitworks">Create your plan</button>
		</section>
	);
}
