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
			<div className="heading-container-question">
				<h2 className="heading-question">{props.question.question}</h2>
				<img
					onClick={showOptions}
					className="image-question"
					src="/assets/img/plan/desktop/icon-arrow.svg"
					alt="arrow icon"
				/>
			</div>
			{isShown && (
				<div>
					<Options question={props.question} />
				</div>
			)}
		</div>
	);
}
