import React, { useEffect, useState } from "react";
import "./Plan.css";
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
			<section className={isDesktop && "container-plan"}>
				{isDesktop && <PlanList />}
				<div>
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
