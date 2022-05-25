import React from "react";
import Button from "../../UI/Button";
import "./Order.css";

export default function Order() {
	return (
		<section className="container-order">
			<div className="summary-order">
				<div className="contents-summary-order">
					<p className="heading-summary-order">ORDER SUMMARY</p>
					<p className="description-summary-order">
						"I drink my coffee as ____, with a ____ type of bean. ____ ground ala ____, sent to me ____."
					</p>
				</div>
			</div>
			<Button>Create my plan!</Button>
		</section>
	);
}
