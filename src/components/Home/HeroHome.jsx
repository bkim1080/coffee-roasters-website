import React from "react";
import "./HeroHome.css";

export default function Hero() {
	return (
		<div className="container-hero">
			<div className="contents-hero">
				<h1 className="heading-hero">Great coffee made simple.</h1>
				<p className="paragraph-hero">
					Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our
					best roasters delivered directly to your door, at your schedule.
				</p>
				<button className="button-hero">Create your plan</button>
			</div>
		</div>
	);
}
