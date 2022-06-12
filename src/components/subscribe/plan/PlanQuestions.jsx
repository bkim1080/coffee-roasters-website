import React from "react";

import PlanQuestion from "./PlanQuestion";

import { planQuestionsList } from "../../../data";

import "./PlanQuestions.css";

export default function Questions() {
	return (
		<section className="container-questions">
			{planQuestionsList.map((question) => {
				return <PlanQuestion key={question.id} question={question} />;
			})}
		</section>
	);
}
