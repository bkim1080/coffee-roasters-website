import React, { useState, useEffect } from "react";
import Option from "./PlanOption";
import "./PlanOptions.css";

export default function Options(props) {
	const [optionsSelected, setOptionsSelected] = useState({});

	// //update state when an option is selected
	// const addOptionsSelected = (selectedOption) => {
	// 	setOptionsSelected((prevOptionsSelected) => {
	// 		return { ...prevOptionsSelected, ...selectedOption };
	// 	});
	// };
	//update state when an option is selected
	const addOptionsSelected = (selectedOption) => {
		setOptionsSelected((prevOptionsSelected) => {
			return { ...prevOptionsSelected, ...selectedOption };
		});
	};

	// let coffeeFormSingleSelect = {};
	// if (optionsSelected.Capsule) {
	// 	coffeeFormSingleSelect = { Capsule: true, Filter: false, Expresso: false };
	// } else if (optionsSelected.Filter) {
	// 	coffeeFormSingleSelect = { Capsule: false, Filter: true, Expresso: false };
	// } else if (optionsSelected.Expresso) {
	// 	coffeeFormSingleSelect = { Capsule: false, Filter: false, Expresso: true };
	// }

	// let coffeeTypeSingleSelect = {};
	// if (optionsSelected["Single Origin"]) {
	// 	coffeeTypeSingleSelect = { "Single Origin": true, Decaf: false, Blended: false };
	// } else if (optionsSelected.Decaf) {
	// 	coffeeTypeSingleSelect = { "Single Origin": false, Decaf: true, Blended: false };
	// } else if (optionsSelected.Blended) {
	// 	coffeeTypeSingleSelect = { "Single Origin": false, Decaf: false, Blended: true };
	// }

	// const [coffeeAmountSingleSelect, setCoffeeAmountSelected] = useState({});

	// useEffect(() => {
	// 	if (optionsSelected["250g"]) {
	// 		setCoffeeAmountSelected({ "250g": true, "500g": false, "1000g": false });
	// 	} else if (optionsSelected["500g"]) {
	// 		setCoffeeAmountSelected({ "250g": false, "500g": true, "1000g": false });
	// 	} else if (optionsSelected["1000g"]) {
	// 		setCoffeeAmountSelected({ "250g": false, "500g": false, "1000g": true });
	// 	}
	// }, [options]);

	let coffeeAmountSingleSelect = {};
	if (optionsSelected["250g"]) {
		coffeeAmountSingleSelect = { "250g": true, "500g": false, "1000g": false };
	} else if (optionsSelected["500g"]) {
		coffeeAmountSingleSelect = { "250g": false, "500g": true, "1000g": false };
	} else if (optionsSelected["1000g"]) {
		coffeeAmountSingleSelect = { "250g": false, "500g": false, "1000g": true };
	}

	console.log(coffeeAmountSingleSelect);
	console.log(optionsSelected);
	// console.log("PlanOptions rendered");

	return (
		<div className="container-options">
			{props.planQuestion.options.map((option) => {
				return (
					<Option
						key={option.id}
						option={option}
						onOptionsSelected={addOptionsSelected}
						optionsSelected={optionsSelected}
						// coffeeFormSingleSelect={coffeeFormSingleSelect}
						// coffeeTypeSingleSelect={coffeeTypeSingleSelect}
						coffeeAmountSingleSelect={coffeeAmountSingleSelect}
					/>
				);
			})}
		</div>
	);
}
