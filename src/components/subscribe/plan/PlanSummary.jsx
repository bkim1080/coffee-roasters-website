import React, { useState, useContext, useEffect } from "react";
import PlanDetailsContext from "../../../context/plan-details-context";
import styles from "./PlanSummary.module.css";

import Button from "../../UI/Button";
import CheckoutModal from "./CheckoutModal";
import OrderSummaryText from "./OrderSummaryText";

export default function PlanSummary() {
	const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const ctx = useContext(PlanDetailsContext);

	//toggle checkout modal on and off
	const checkoutHandler = () => {
		setIsCheckoutModalOpen((prevIsCheckoutModalOpen) => {
			return !prevIsCheckoutModalOpen;
		});
	};

	//disable checkout button if all questions are not answered
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
		} else {
			setIsButtonDisabled(true);
		}
	}, [
		ctx.planDetails.coffeeForm,
		ctx.planDetails.coffeeType,
		ctx.planDetails.coffeeAmount,
		ctx.planDetails.coffeeGrind,
		ctx.planDetails.deliverySchedule,
	]);

	return (
		<section className={styles.container}>
			{isCheckoutModalOpen && <CheckoutModal onClick={checkoutHandler} />}
			<div className={styles.card}>
				<div className={styles.contents}>
					<p className={styles.heading}>ORDER SUMMARY</p>
					<OrderSummaryText className={styles.text} />
				</div>
			</div>
			<Button
				className={isButtonDisabled && `${styles["disabled-button"]}`}
				onClick={checkoutHandler}
				disabled={isButtonDisabled}
			>
				Create my plan!
			</Button>
		</section>
	);
}
