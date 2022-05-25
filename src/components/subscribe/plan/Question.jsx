import React, { useState } from "react";
import Options from "./Options";
import "./Question.css";

export default function Question(props) {
	const [isShown, setIsShown] = useState(false);
	function showOptions() {
		setIsShown((prevIsShown) => !prevIsShown);
	}
	return (
		<div className="container-question">
			<div onClick={showOptions} className="heading-container-question">
				<h2 className="heading-question">{props.question.question}</h2>
				<img
					className={`arrow-image-question ${isShown && "isShown"}`}
					src="/assets/img/plan/desktop/icon-arrow.svg"
					alt="arrow icon"
				/>
			</div>
			{isShown && <Options question={props.question} />}
		</div>
	);
}
