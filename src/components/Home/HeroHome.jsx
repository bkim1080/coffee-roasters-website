import React from "react";
import "./HeroHome.css";

export default function Hero() {
	return (
		<section className="container-hero-home">
			<div className="contents-hero-home">
				<h1 className="heading-hero-home">Great coffee made simple.</h1>
				<p className="description-hero-home">
					Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our
					best roasters delivered directly to your door, at your schedule.
				</p>
				<button className="button-hero-home">Create your plan</button>
			</div>
		</section>
	);
}
