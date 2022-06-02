import React from "react";
import Option from "./Option";
import "./Options.css";

export default function Options(props) {
	return (
		<div className="container-options">
			{props.question.options.map((option) => {
				return <Option key={option.id} option={option} question={props.question} />;
			})}
		</div>
	);
}
