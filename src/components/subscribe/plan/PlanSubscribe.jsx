import React, { useContext } from "react";

import OrderSummary from "./OrderSummary";
import PlanContext from "../../../context/plan-context";
import Questions from "./Questions";

export default function PlanSubscribe() {
	return (
		<React.Fragment>
			<Questions />
			<OrderSummary />
		</React.Fragment>
	);
}
