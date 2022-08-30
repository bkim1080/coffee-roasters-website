import React from "react";
import PlanOptionRadio from "./PlanOption";
import styles from "./PlanOptions.module.css";

export default function PlanOptionsRadio(props) {
	return (
		<div className={styles.container}>
			{props.planQuestion.options.map((option) => {
				return <PlanOptionRadio key={option.id} option={option} />;
			})}
		</div>
	);
}
