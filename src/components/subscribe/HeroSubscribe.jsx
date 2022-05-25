import React from "react";
import Card from "../UI/Card";
import "./HeroSubscribe.css";

export default function HeroSubscribe() {
	return (
		<section className="container-hero-subscribe">
			<Card className="card-hero-subscribe">
				<div className="contents-hero-subscribe">
					<h1 className="heading-hero-subscribe">Create a plan</h1>
					<p className="description-hero-subscribe">
						Build a subscription plan that best fits your needs. We offer an assortment of the best artisan
						coffees from around the globe delivered fresh to your door.
					</p>
				</div>
			</Card>
		</section>
	);
}
