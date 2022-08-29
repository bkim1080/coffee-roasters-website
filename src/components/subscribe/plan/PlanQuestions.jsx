import React from "react";
import { planQuestionsList } from "../../../data";
import "./PlanQuestions.css";

import PlanQuestion from "./PlanQuestion";

export default function Questions() {
	return (
		<section className="container-questions">
			{planQuestionsList.map((planQuestion) => {
				return <PlanQuestion key={planQuestion.id} planQuestion={planQuestion} />;
			})}
		</section>
	);
}
