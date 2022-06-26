import React from "react";

import PlanQuestion from "./PlanQuestion";
import { planQuestionsList } from "../../../data";
import "./PlanQuestions.css";

export default function Questions() {
	return (
		<section className="container-questions">
			{planQuestionsList.map((planQuestion) => {
				return <PlanQuestion key={planQuestion.id} planQuestion={planQuestion} />;
			})}
		</section>
	);
}
