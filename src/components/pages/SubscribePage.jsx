import React from "react";
import HeroSubscribe from "../subscribe/HeroSubscribe";
import Questions from "../subscribe/plan/Questions";
import StepsSubscribe from "../subscribe/StepsSubscribe";

export default function () {
	return (
		<React.Fragment>
			<HeroSubscribe />
			<StepsSubscribe />
			<Questions />
		</React.Fragment>
	);
}
