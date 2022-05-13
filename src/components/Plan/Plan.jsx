import React from "react";
import PlanStep from "./PlanStep";
import "./Plan.css";

export default function Plan() {
	const stepList = [
		{
			id: "01",
			num: "01",
			name: "Pick your coffee",
			description:
				"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
		},
		{
			id: "02",
			num: "02",
			name: "Choose the frequency",
			description:
				"Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
		},
		{
			id: "03",
			num: "03",
			name: "Receive and enjoy!",
			description:
				"We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
		},
	];
	return (
		<div className="container-plan">
			<h4 className="heading-plan">How it works</h4>
			<div className="steps-plan">
				{stepList.map((step) => (
					<PlanStep key={step.id} num={step.num} name={step.name} description={step.description} />
				))}
			</div>
			<button className="button-plan">Create your plan</button>
		</div>
	);
}
