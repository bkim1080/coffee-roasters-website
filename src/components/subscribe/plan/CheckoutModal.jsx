import React, { useContext } from "react";
import ReactDOM from "react-dom";
import PlanDetailsContext from "../../../context/plan-details-context";
import styles from "./CheckoutModal.module.css";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import OrderSummaryText from "./OrderSummaryText";

export default function CheckoutModal(props) {
	const ctx = useContext(PlanDetailsContext);
	let planPrice = "____";

	if (ctx.planDetails.coffeeAmount === "250g") {
		if (ctx.planDetails.deliverySchedule === "Every Week") {
			planPrice = "$28.80";
		} else if (ctx.planDetails.deliverySchedule === "Every 2 Weeks") {
			planPrice = "$19.20";
		} else if (ctx.planDetails.deliverySchedule === "Every Month") {
			planPrice = "$12.00";
		}
	} else if (ctx.planDetails.coffeeAmount === "500g") {
		if (ctx.planDetails.deliverySchedule === "Every Week") {
			planPrice = "$52.00";
		} else if (ctx.planDetails.deliverySchedule === "Every 2 Weeks") {
			planPrice = "$35.0";
		} else if (ctx.planDetails.deliverySchedule === "Every Month") {
			planPrice = "$22.00";
		}
	} else if (ctx.planDetails.coffeeAmount === "1000g") {
		if (ctx.planDetails.deliverySchedulee === "Every Week") {
			planPrice = "$88.00";
		} else if (ctx.planDetails.deliverySchedule === "Every 2 Weeks") {
			planPrice = "$64.00";
		} else if (ctx.planDetails.deliverySchedule === "Every Month") {
			planPrice = "$42.00";
		}
	}
	return ReactDOM.createPortal(
		<React.Fragment>
			<div className={styles.backdrop} onClick={props.onClick} />
			<Card className={styles.card}>
				<div className={styles.heading}>
					<h2>Order Summary</h2>
				</div>
				<div className={styles.body}>
					<div>
						<OrderSummaryText className={styles.summary} />
						<p className={styles.subtext}>
							Is this correct? You can proceed to checkout or go back to plan selection if something is
							off. Subscription discount codes can also be redeemed at the checkout.
						</p>
						<Button onClick={props.onClick}>Checkout - {planPrice} / mo</Button>
					</div>
				</div>
			</Card>
		</React.Fragment>,
		document.getElementById("overlay-root")
	);
}
