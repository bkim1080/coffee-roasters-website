import React, { useState, useContext, useEffect } from "react";
import PlanContext from "../../../context/plan-context";
import "./Option.css";

export default function Option(props) {
	const ctx = useContext(PlanContext);
	const [isSelected, setIsSelected] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");

	function selectOptionHandler() {
		setIsSelected((prevIsSelected) => !prevIsSelected);

		//update 'planDetails' state
		if (!selectedOption) {
			setSelectedOption({ [props.option.type]: props.option.name });
			ctx.onSelectOption({ [props.option.type]: props.option.name });
		} else if (selectedOption) {
			setSelectedOption("");
			ctx.onSelectOption({ [props.option.type]: "" });
		}

		//only allow one option to be selected per question
	}

	console.log(isSelected);
	console.log(selectedOption);
	console.log(ctx.planDetails);

	return (
		<div className={`container-option ${isSelected ? "selected" : ""}`} onClick={selectOptionHandler}>
			<div className="contents-option">
				<h4 className={`heading-option ${isSelected ? "selected" : ""}`}>{props.option.name}</h4>
				<p className={`description-option ${isSelected ? "selected" : ""}`}>{props.option.description}</p>
			</div>
		</div>
	);
}
