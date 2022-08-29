import React, { useContext } from "react";
import PlanDetailsContext from "../../../context/plan-details-context";
import "./OrderSummaryText.css";

export default function OrderSummaryText(props) {
	const ctx = useContext(PlanDetailsContext);

	let planSummary = (
		<p className={`description-summary-text ${props.className}`}>
			"I drink my coffee as{" "}
			<span className="option-summary-text">
				{ctx.planDetails.coffeeForm ? ctx.planDetails.coffeeForm : "____"}
			</span>
			, with a{" "}
			<span className="option-summary-text">
				{ctx.planDetails.coffeeType ? ctx.planDetails.coffeeType : "____"}
			</span>{" "}
			type of bean.{" "}
			<span className="option-summary-text">
				{ctx.planDetails.coffeeAmount ? ctx.planDetails.coffeeAmount : "____"}
			</span>{" "}
			ground ala{" "}
			<span className="option-summary-text">
				{ctx.planDetails.coffeeGrind ? ctx.planDetails.coffeeGrind : "____"}
			</span>
			, sent to me{" "}
			<span className="option-summary-text">
				{ctx.planDetails.deliverySchedule ? ctx.planDetails.deliverySchedule : "____"}
			</span>
			."
		</p>
	);
	if (ctx.planDetails.coffeeForm === "Capsule") {
		planSummary = (
			<p className={`description-summary-text ${props.className}`}>
				"I drink my coffee using <span className="option-summary-text">{ctx.planDetails.coffeeForm}s</span>,
				with a{" "}
				<span className="option-summary-text">
					{ctx.planDetails.coffeeType ? ctx.planDetails.coffeeType : "____"}
				</span>{" "}
				type of bean.{" "}
				<span className="option-summary-text">
					{ctx.planDetails.coffeeAmount ? ctx.planDetails.coffeeAmount : "____"}
				</span>
				, sent to me{" "}
				<span className="option-summary-text">
					{ctx.planDetails.deliverySchedule ? ctx.planDetails.deliverySchedule : "____"}
				</span>
				."
			</p>
		);
	} else if (ctx.planDetails.coffeeForm === "Filter" || ctx.planDetails.coffeeForm === "Expresso") {
		planSummary = (
			<p className={`description-summary-text ${props.className}`}>
				"I drink my coffee as <span className="option-summary-text">{ctx.planDetails.coffeeForm}</span>, with a{" "}
				<span className="option-summary-text">
					{ctx.planDetails.coffeeType ? ctx.planDetails.coffeeType : "____"}
				</span>{" "}
				type of bean.{" "}
				<span className="option-summary-text">
					{ctx.planDetails.coffeeAmount ? ctx.planDetails.coffeeAmount : "____"}
				</span>{" "}
				ground ala{" "}
				<span className="option-summary-text">
					{ctx.planDetails.coffeeGrind ? ctx.planDetails.coffeeGrind : "____"}
				</span>
				, sent to me{" "}
				<span className="option-summary-text">
					{ctx.planDetails.deliverySchedule ? ctx.planDetails.deliverySchedule : "____"}
				</span>
				."
			</p>
		);
	}
	return <React.Fragment>{planSummary}</React.Fragment>;
}
