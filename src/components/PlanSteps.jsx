import React from "react";
import { stepsList } from "../data";
import styles from "./PlanSteps.module.css";

export default function PlanSteps(props) {
	return (
		<div className={styles.container}>
			{stepsList.map((step) => {
				return (
					<div key={step.id}>
						<p className={styles.number}>{step.num}</p>
						<h3 className={`${styles.name} ${props.headingClass}`}>{step.name}</h3>
						<p className={`${styles.description} ${props.descriptionClass}`}>{step.description}</p>
					</div>
				);
			})}
		</div>
	);
}
