import React from "react";

import { PlanContextProvider } from "../../context/plan-context";

import HeroSubscribe from "../subscribe/HeroSubscribe";
import PlanSubscribe from "../subscribe/plan/PlanSubscribe";
import StepsSubscribe from "../subscribe/StepsSubscribe";

export default function SubscribePage() {
	return (
		<React.Fragment>
			<HeroSubscribe />
			<StepsSubscribe />
			<PlanContextProvider>
				<PlanSubscribe />
			</PlanContextProvider>
		</React.Fragment>
	);
}
