import React, { useState, useContext, useEffect } from "react";
import Options from "./PlanOptions";
import PlanContext from "../../../context/plan-context";
import "./PlanQuestion.css";

export default function Question(props) {
	const ctx = useContext(PlanContext);
	const [isShown, setIsShown] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

	//diable the "Want us to grind them?" question if 'Capsule' is chosen
	useEffect(() => {
		if (ctx.planDetails.coffeeForm === "Capsule" && props.question.disable) {
			setIsDisabled(true);
			setIsShown(false);
		} else {
			setIsDisabled(false);
		}
	}, [ctx.planDetails.coffeeForm, props.question.disable]);

	function showOptionsHandler() {
		setIsShown((prevIsShown) => !prevIsShown);
	}

	return (
		<div className="container-question">
			<div
				onClick={isDisabled ? undefined : showOptionsHandler}
				className={`heading-container-question ${isDisabled ? "disabled" : ""}`}
			>
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
