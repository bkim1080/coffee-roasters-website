import React, { useState, useContext, useEffect } from "react";

import Button from "../../UI/Button";
import CheckoutModal from "./CheckoutModal";
import OrderSummaryText from "./OrderSummaryText";
import PlanDetailsContext from "../../../context/plan-details-context";

import "./PlanSummary.css";

export default function PlanSummary() {
	const [isCheckoutModalShown, setIsCheckoutModalShown] = useState(false);
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const ctx = useContext(PlanDetailsContext);

	//toggle checkout modal on and off
	const checkoutHandler = () => {
		setIsCheckoutModalShown((prevIsCheckoutModalShown) => {
			return !prevIsCheckoutModalShown;
		});
	};

	//disable checkout button all questions are not answered
	useEffect(() => {
		if (
			ctx.planDetails.coffeeForm &&
			ctx.planDetails.coffeeType &&
			ctx.planDetails.coffeeAmount &&
			ctx.planDetails.coffeeGrind &&
			ctx.planDetails.deliverySchedule
		) {
			setIsButtonDisabled(false);
		} else if (
			ctx.planDetails.coffeeForm === "Capsule" &&
			ctx.planDetails.coffeeType !== "" &&
			ctx.planDetails.coffeeAmount !== "" &&
			ctx.planDetails.deliverySchedule !== ""
		) {
			setIsButtonDisabled(false);
		}
	}, [
		ctx.planDetails.coffeeForm,
		ctx.planDetails.coffeeType,
		ctx.planDetails.coffeeAmount,
		ctx.planDetails.coffeeGrind,
		ctx.planDetails.deliverySchedule,
	]);

	console.log(isButtonDisabled);

	return (
		<section className="container-plan-summary">
			{isCheckoutModalShown && <CheckoutModal onClick={checkoutHandler} />}
			<div className="card-plan-summary">
				<div className="contents-plan-summary">
					<p className="heading-plan-summary">ORDER SUMMARY</p>
					<OrderSummaryText className="text-plan-summary" />
				</div>
			</div>
			<Button
				className={isButtonDisabled && "disabled-button-summary"}
				onClick={checkoutHandler}
				disabled={isButtonDisabled}
			>
				Create my plan!
			</Button>
		</section>
	);
}
