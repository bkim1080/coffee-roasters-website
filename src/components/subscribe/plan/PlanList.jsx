import React, { useContext } from "react";
import PlanDetailsContext from "../../../context/plan-details-context";
import "./PlanList.css";

export default function PlanList() {
	const ctx = useContext(PlanDetailsContext);
	return (
		<div className="container-plan-list">
			<ul>
				<li className={`item-plan-list ${ctx.planDetails.coffeeForm && "selected"}`}>
					<span className="number-plan-list">01</span>Preferences
				</li>
				<hr className="hr-plan-list" />
				<li className={`item-plan-list ${ctx.planDetails.coffeeType && "selected"}`}>
					<span className="number-plan-list">02</span>Bean Type
				</li>
				<hr className="hr-plan-list" />
				<li className={`item-plan-list ${ctx.planDetails.coffeeAmount && "selected"}`}>
					<span className="number-plan-list">03</span>Quantity
				</li>
				<hr className="hr-plan-list" />
				<li
					className={`item-plan-list ${ctx.planDetails.coffeeGrind && "selected"}${
						ctx.planDetails.coffeeForm === "Capsule" ? "disabled" : ""
					}`}
				>
					<span className="number-plan-list">04</span>Grind Option
				</li>
				<hr className="hr-plan-list" />
				<li className={`item-plan-list ${ctx.planDetails.deliverySchedule && "selected"}`}>
					<span className="number-plan-list">05</span>Deliveries
				</li>
			</ul>
		</div>
	);
}
