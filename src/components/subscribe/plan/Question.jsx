import React, { useState, useContext, useEffect } from "react";
import Options from "./Options";
import PlanContext from "../../../context/plan-context";
import "./Question.css";

export default function Question(props) {
	const ctx = useContext(PlanContext);
	const [isShown, setIsShown] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

	useEffect(() => {
		if (ctx.planDetails.coffeeForm === "Capsule" && props.question.disable) {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}
	}, [ctx.planDetails.coffeeForm, props.question.disable]);

	function showOptionsHandler() {
		setIsShown((prevIsShown) => !prevIsShown);
	}

	return (
		<div className={`container-question ${isDisabled ? "disabled" : ""}`}>
			<div onClick={isDisabled ? undefined : showOptionsHandler} className="heading-container-question">
				<h2 className="heading-question">{props.question.question}</h2>
				<img
					className={`arrow-image-question ${isShown ? "shown" : ""}`}
					src="/assets/img/plan/desktop/icon-arrow.svg"
					alt="arrow icon"
				/>
			</div>
			{isShown && <Options question={props.question} />}
		</div>
	);
}
