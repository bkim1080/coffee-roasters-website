import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import "./HeroHome.css";

export default function Hero() {
	return (
		<section className="container-hero-home">
			<Card className="card-hero-home">
				<div className="contents-hero-home">
					<h1 className="heading-hero-home">Great coffee made simple.</h1>
					<p className="description-hero-home">
						Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from
						our best roasters delivered directly to your door, at your schedule.
					</p>
					<Link to="/subscribe">
						<Button>Create your plan</Button>
					</Link>
				</div>
			</Card>
		</section>
	);
}
