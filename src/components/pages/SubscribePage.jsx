import React from "react";

import { PlanDetailsContextProvider } from "../../context/plan-details-context";

import HeroSubscribe from "../subscribe/HeroSubscribe";
import PlanQuestions from "../subscribe/plan/PlanQuestions";
import PlanSummary from "../subscribe/plan/PlanSummary";
import StepsSubscribe from "../subscribe/StepsSubscribe";

export default function SubscribePage() {
	return (
		<React.Fragment>
			<HeroSubscribe />
			<StepsSubscribe />
			<PlanDetailsContextProvider>
				<PlanQuestions />
				<PlanSummary />
			</PlanDetailsContextProvider>
		</React.Fragment>
	);
}
