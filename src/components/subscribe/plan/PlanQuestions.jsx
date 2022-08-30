import React from "react";
import { planQuestionsList } from "../../../data";
import styles from "./PlanQuestions.module.css";

import PlanQuestion from "./PlanQuestion";

export default function Questions() {
	return (
		<section className={styles.container}>
			{planQuestionsList.map((planQuestion) => {
				return <PlanQuestion key={planQuestion.id} planQuestion={planQuestion} />;
			})}
		</section>
	);
}
