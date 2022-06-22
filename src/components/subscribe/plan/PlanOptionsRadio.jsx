import React from "react";
import PlanOptionRadio from "./PlanOptionRadio";
import "./PlanOptions.css";

export default function PlanOptionsRadio(props) {
	// console.log("PlanOptions rendered");
	return (
		<div className="container-options">
			{props.planQuestion.options.map((option) => {
				return <PlanOptionRadio key={option.id} option={option} />;
			})}
		</div>
	);
}