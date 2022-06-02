import React, { useContext, useState, useEffect } from "react";

import Question from "./PlanQuestion";

import { planQuestionsList } from "../../../data";

import "./PlanQuestions.css";

export default function Questions() {
	return (
		<section className="container-questions">
			{planQuestionsList.map((question) => {
				return <Question key={question.id} question={question} />;
			})}
		</section>
	);
}
