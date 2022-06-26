import React from "react";
import PlanOptionRadio from "./PlanOption";
import "./PlanOptions.css";

export default function PlanOptionsRadio(props) {
	return (
		<div className="container-options">
			{props.planQuestion.options.map((option) => {
				return <PlanOptionRadio key={option.id} option={option} />;
			})}
		</div>
	);
}
