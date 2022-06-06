import React, { useState } from "react";
import Option from "./PlanOption";
import "./PlanOptions.css";

export default function Options(props) {
	// const [optionsGroup, setOptionsGroup] = useState({});

	// const selectOptionHandler = (selectedOption) => {
	// 	setOptionsGroup((prevOptionsGroup) => {
	// 		return { ...prevOptionsGroup, ...selectedOption };
	// 	});
	// };

	// console.log(optionsGroup);

	return (
		<div className="container-options">
			{props.question.options.map((option) => {
				return (
					<Option
						key={option.id}
						option={option}
						question={props.question}
						// onSelectOption={selectOptionHandler}
						// optionsGroup={optionsGroup}
					/>
				);
			})}
		</div>
	);
}
