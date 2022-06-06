import React from "react";
import { Link } from "react-router-dom";
import PlanSteps from "../../UI/PlanSteps";
import Button from "../../UI/Button";
import "./HowItWorks.css";

export default function Plan() {
	return (
		<section className="container-works">
			<h4 className="heading-works">How it works</h4>
			<div className="plan-steps-works">
				<PlanSteps headingClass="name-step-works" descriptionClass="description-step-works" />
			</div>
			<Link to="/subscribe">
				<Button className="button-works">Create your plan</Button>
			</Link>
		</section>
	);
}
