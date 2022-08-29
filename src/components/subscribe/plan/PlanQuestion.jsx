import React, { useState, useContext, useEffect } from "react";
import PlanDetailsContext from "../../../context/plan-details-context";
import "./PlanQuestion.css";

import PlanOptions from "./PlanOptions";

export default function Question(props) {
	const ctx = useContext(PlanDetailsContext);
	const [isShown, setIsShown] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

	//diable the "Want us to grind them?" question if 'Capsule' option is selected
	useEffect(() => {
		if (ctx.planDetails.coffeeForm === "Capsule" && props.planQuestion.disable) {
			setIsDisabled(true);
			setIsShown(false);
		} else {
			setIsDisabled(false);
		}
	}, [ctx.planDetails.coffeeForm, props.planQuestion.disable]);

	function showOptionsHandler() {
		setIsShown((prevIsShown) => !prevIsShown);
	}

	return (
		<div className="container-question">
			<div
				onClick={isDisabled ? undefined : showOptionsHandler}
				className={`heading-container-question ${isDisabled ? "disabled" : ""}`}
			>
				<h2 className="heading-question">{props.planQuestion.question}</h2>
				<img
					className={`arrow-image-question ${isShown ? "shown" : ""}`}
					src="/assets/img/plan/desktop/icon-arrow.svg"
					alt="arrow icon"
				/>
			</div>
			{isShown && <PlanOptions planQuestion={props.planQuestion} />}
		</div>
	);
}
