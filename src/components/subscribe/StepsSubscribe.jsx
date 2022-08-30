import React, { useState, useEffect } from "react";
import styles from "./StepsSubscribe.module.css";

import PlanSteps from "../PlanSteps";

export default function StepsSubscribe() {
	return (
		<section className={styles.container}>
			<div className={styles.plan}>
				<PlanSteps headingClass={styles.name} descriptionClass={styles.description} />
			</div>
		</section>
	);
}
