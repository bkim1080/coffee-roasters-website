import React, { useState, useContext } from "react";

import PlanDetailsContext from "../../../context/plan-details-context";

import "./PlanOptionRadio.css";

export default function PlanOptionRadio(props) {
	const ctx = useContext(PlanDetailsContext);

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

	console.log(ctx.planDetails);

	return (
		<div className="container-option">
			<div className="contents-option">
				<input
					className="input-option"
					onChange={ctx.onSelectOption}
					type="radio"
					id={props.option.name}
					name={props.option.type}
					value={props.option.name}
					checked={ctx.planDetails[props.option.type] === props.option.name}
				/>
				<label className="label-option" htmlFor={props.option.name}>
					<h4 className="heading-option">{props.option.name}</h4>
					<p className="description-option">
						{props.option.type === "deliverySchedule" && deliveryPrice} {props.option.description}
					</p>
				</label>
			</div>
		</div>
	);
}
