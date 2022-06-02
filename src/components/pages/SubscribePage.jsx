import React from "react";

import { PlanContextProvider } from "../../context/plan-context";

import HeroSubscribe from "../subscribe/HeroSubscribe";
import PlanQuestions from "../subscribe/plan/PlanQuestions";
import PlanSummary from "../subscribe/plan/PlanSummary";
import StepsSubscribe from "../subscribe/StepsSubscribe";

export default function SubscribePage() {
	return (
		<React.Fragment>
			<HeroSubscribe />
			<StepsSubscribe />
			<PlanContextProvider>
				<PlanQuestions />
				<PlanSummary />
			</PlanContextProvider>
		</React.Fragment>
	);
}
