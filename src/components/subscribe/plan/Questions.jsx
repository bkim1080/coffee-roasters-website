import React, { useContext, useState, useEffect } from "react";

import Question from "./Question";

import { questionsList } from "../../../data";

import "./Questions.css";

export default function Questions() {
	return (
		<section className="container-questions">
			{questionsList.map((question) => {
				return <Question key={question.id} question={question} />;
			})}
		</section>
	);
}
