import React, { useEffect, useState } from "react";
import styles from "./Plan.module.css";

import PlanList from "./PlanList";
import PlanQuestions from "./PlanQuestions";
import PlanSummary from "./PlanSummary";

export default function Plan() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

	const updateDesktopImage = () => {
		setIsDesktop(window.innerWidth >= 1440);
	};

	useEffect(() => {
		window.addEventListener("resize", updateDesktopImage);
		return () => {
			window.removeEventListener("resize", updateDesktopImage);
		};
	});

	if (isDesktop) {
		return (
			<section className={isDesktop && styles.container}>
				<div className={`${styles["div-one"]}`}>{isDesktop && <PlanList />}</div>
				<div className={`${styles["div-two"]}`}>
					<PlanQuestions />
					<PlanSummary />
				</div>
			</section>
		);
	} else {
		return (
			<React.Fragment>
				<PlanQuestions />
				<PlanSummary />
			</React.Fragment>
		);
	}
}
