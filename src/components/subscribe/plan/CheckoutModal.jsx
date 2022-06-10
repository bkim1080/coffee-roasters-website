import React from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import OrderSummaryText from "./OrderSummaryText";

import "./CheckoutModal.css";

export default function CheckoutModal(props) {
	return (
		<React.Fragment>
			<div className="backdrop-checkout-modal" onClick={props.onClick} />
			<Card className="container-checkout-modal">
				<div className="heading-checkout-modal">
					<h2>Order Summary</h2>
				</div>
				<div className="body-checkout-modal">
					<div>
						<OrderSummaryText className="summary-checkout-modal" />
						<p className="subtext-checkout-modal">
							Is this correct? You can proceed to checkout or go back to plan selection if something is
							off. Subscription discount codes can also be redeemed at the checkout.
						</p>
						<Button onClick={props.onClick}>Checkout - $14.00 / mo</Button>
					</div>
				</div>
			</Card>
		</React.Fragment>
	);
}
