import React from "react";

import { PlanDetailsContextProvider } from "../../context/plan-details-context";

import HeroSubscribe from "../subscribe/HeroSubscribe";
import StepsSubscribe from "../subscribe/StepsSubscribe";
import Plan from "../subscribe/plan/Plan";

export default function SubscribePage() {
	return (
		<React.Fragment>
			<HeroSubscribe />
			<StepsSubscribe />
			<PlanDetailsContextProvider>
				<Plan />
			</PlanDetailsContextProvider>
		</React.Fragment>
	);
}
