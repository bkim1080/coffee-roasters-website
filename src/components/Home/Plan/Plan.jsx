import React from "react";
import PlanStep from "./PlanStep";
import { planSteps } from "../../../data";
import "./Plan.css";

export default function Plan() {
	return (
		<div className="container-plan">
			<h4 className="heading-plan">How it works</h4>
			<div className="steps-plan">
				{planSteps.map((step) => {
					const { id, num, name, description } = step;
					return <PlanStep key={id} num={num} name={name} description={description} />;
				})}
			</div>
			<button className="button-plan">Create your plan</button>
		</div>
	);
}
