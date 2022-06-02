import React, { useContext } from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import PlanContext from "../../../context/plan-context";

import "./OrderSummary.css";

export default function OrderSummary() {
	const ctx = useContext(PlanContext);

	let planSummary = (
		<p className="description-summary">
			"I drink my coffee as <span className="option-summary">____</span>, with a{" "}
			<span className="option-summary">____</span> type of bean. <span className="option-summary">____</span>{" "}
			ground ala <span className="option-summary">____</span>, sent to me{" "}
			<span className="option-summary">____</span>."
		</p>
	);
	if (ctx.planDetails.coffeeForm === "Capsule") {
		planSummary = (
			<p className="description-summary">
				"I drink my coffee using <span className="option-summary">{ctx.planDetails.coffeeForm}s</span>, with a{" "}
				<span className="option-summary">
					{ctx.planDetails.coffeeType ? ctx.planDetails.coffeeType : "____"}
				</span>{" "}
				type of bean.{" "}
				<span className="option-summary">
					{ctx.planDetails.coffeeAmount ? ctx.planDetails.coffeeAmount : "____"}
				</span>
				, sent to me{" "}
				<span className="option-summary">
					{ctx.planDetails.deliverySchedule ? ctx.planDetails.deliverySchedule : "____"}
				</span>
				."
			</p>
		);
	} else if (ctx.planDetails.coffeeForm === "Filter" || ctx.planDetails.coffeeForm === "Expresso") {
		planSummary = (
			<p className="description-summary">
				"I drink my coffee as <span className="option-summary">{ctx.planDetails.coffeeForm}</span>, with a{" "}
				<span className="option-summary">
					{ctx.planDetails.coffeeType ? ctx.planDetails.coffeeType : "____"}
				</span>{" "}
				type of bean.{" "}
				<span className="option-summary">
					{ctx.planDetails.coffeeAmount ? ctx.planDetails.coffeeAmount : "____"}
				</span>{" "}
				ground ala{" "}
				<span className="option-summary">
					{ctx.planDetails.coffeeGrind ? ctx.planDetails.coffeeGrind : "____"}
				</span>
				, sent to me{" "}
				<span className="option-summary">
					{ctx.planDetails.deliverySchedule ? ctx.planDetails.deliverySchedule : "____"}
				</span>
				."
			</p>
		);
	}

	return (
		<section className="container-summary">
			<Card className="card-summary">
				<div className="contents-summary">
					<p className="heading-summary">ORDER SUMMARY</p>
					{planSummary}
				</div>
			</Card>
			<div className="container-button-summary">
				<Button>Create my plan!</Button>
			</div>
		</section>
	);
}
