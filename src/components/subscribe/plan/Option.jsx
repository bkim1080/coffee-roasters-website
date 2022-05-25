import React, { useState } from "react";
import "./Option.css";

export default function Option(props) {
	const [isSelected, setIsSelected] = useState(false);
	function selectOption() {
		setIsSelected((prevIsSelected) => !prevIsSelected);
	}

	return (
		<div className={`container-option ${isSelected && "isSelected"}`} onClick={selectOption}>
			<div className="contents-option">
				<h4 className={`heading-option ${isSelected && "isSelected"}`}>{props.option.option}</h4>
				<p className={`description-option ${isSelected && "isSelected"}`}>{props.option.description}</p>
			</div>
		</div>
	);
}
