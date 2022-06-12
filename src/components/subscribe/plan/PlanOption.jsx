import React, { useState, useContext, useEffect } from "react";
import PlanDetailsContext from "../../../context/plan-details-context";
import "./PlanOption.css";

export default function Option(props) {
	const ctx = useContext(PlanDetailsContext);
	const [isSelected, setIsSelected] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");

	// dynamically set price in delivery option descriptions
	let deliveryPrice = "____";

	if (ctx.planDetails.coffeeAmount === "250g") {
		if (props.option.name === "Every Week") {
			deliveryPrice = "$7.20";
		} else if (props.option.name === "Every 2 Weeks") {
			deliveryPrice = "$9.60";
		} else if (props.option.name === "Every Month") {
			deliveryPrice = "$12.00";
		}
	} else if (ctx.planDetails.coffeeAmount === "500g") {
		if (props.option.name === "Every Week") {
			deliveryPrice = "$13.00";
		} else if (props.option.name === "Every 2 Weeks") {
			deliveryPrice = "$17.50";
		} else if (props.option.name === "Every Month") {
			deliveryPrice = "$22.00";
		}
	} else if (ctx.planDetails.coffeeAmount === "1000g") {
		if (props.option.name === "Every Week") {
			deliveryPrice = "$22.00";
		} else if (props.option.name === "Every 2 Weeks") {
			deliveryPrice = "$32.00";
		} else if (props.option.name === "Every Month") {
			deliveryPrice = "$42.00";
		}
	}

	function selectOptionHandler() {
		setIsSelected((prevIsSelected) => !prevIsSelected);

		// update plan details
		if (!selectedOption) {
			setSelectedOption({ [props.option.type]: props.option.name });
			ctx.onSelectOption({ [props.option.type]: props.option.name });
		} else if (selectedOption) {
			setSelectedOption("");
			ctx.onSelectOption({ [props.option.type]: "" });
		}

		// lift state up to 'PlanOptions' component
		// if (!props.optionsGroup[props.option.type] === props.option.name) {
		// 	props.onSelectOption({ [props.option.type]: props.option.name });
		// } else if (props.optionsGroup[props.option.type] === props.option.name) {
		// 	props.onSelectOption({ [props.option.type]: "" });
		// }
	}

	// console.log(isSelected);
	// console.log(selectedOption);
	// console.log(ctx.planDetails);

	return (
		<div className={`container-option ${isSelected ? "selected" : ""}`} onClick={selectOptionHandler}>
			<div className="contents-option">
				<h4 className={`heading-option ${isSelected ? "selected" : ""}`}>{props.option.name}</h4>
				<p className={`description-option ${isSelected ? "selected" : ""}`}>
					{props.option.type === "deliverySchedule" && deliveryPrice} {props.option.description}
				</p>
			</div>
		</div>
	);
}
