import React, { useState } from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import CheckoutModal from "./CheckoutModal";
import OrderSummaryText from "./OrderSummaryText";

import "./PlanSummary.css";

export default function PlanSummary() {
	const [isCheckoutModalShown, setIsCheckoutModalShown] = useState(false);

	const checkoutHandler = () => {
		setIsCheckoutModalShown((prevIsCheckoutModalShown) => {
			return !prevIsCheckoutModalShown;
		});
	};

	return (
		<section className="container-plan-summary">
			{isCheckoutModalShown && <CheckoutModal onClick={checkoutHandler} />}
			<Card className="card-plan-summary">
				<div className="contents-plan-summary">
					<p className="heading-plan-summary">ORDER SUMMARY</p>
					<OrderSummaryText className="text-plan-summary" />
				</div>
			</Card>
			<Button onClick={checkoutHandler}>Create my plan!</Button>
		</section>
	);
}
