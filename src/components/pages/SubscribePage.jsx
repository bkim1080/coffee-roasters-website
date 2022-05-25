import React from "react";
import HeroSubscribe from "../subscribe/HeroSubscribe";
import Order from "../subscribe/plan/Order";
import Questions from "../subscribe/plan/Questions";
import StepsSubscribe from "../subscribe/StepsSubscribe";

export default function SubscribePage() {
	return (
		<React.Fragment>
			<HeroSubscribe />
			<StepsSubscribe />
			<Questions />
			<Order />
		</React.Fragment>
	);
}
