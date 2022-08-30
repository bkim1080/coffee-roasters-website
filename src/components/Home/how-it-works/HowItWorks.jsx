import React from "react";
import { Link } from "react-router-dom";
import styles from "./HowItWorks.module.css";

import Button from "../../UI/Button";
import PlanSteps from "../../PlanSteps";

export default function Plan() {
	return (
		<section className={styles.container}>
			<h4 className={styles.heading}>How it works</h4>
			<div className={`${styles["plan-steps"]}`}>
				<PlanSteps headingClass={`${styles["name-step"]}`} descriptionClass={`${styles["description-step"]}`} />
			</div>
			<Link to="/subscribe">
				<Button className={styles.button}>Create your plan</Button>
			</Link>
		</section>
	);
}
