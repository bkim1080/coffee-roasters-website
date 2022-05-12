import React from "react";
import FeatureCard from "./FeatureCard";
import "./Features.css";

export default function Features() {
	const featuresList = [
		{
			image: "icon-coffee-bean.svg",
			name: "Best quality",
			description: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
			alt: "coffee bean icon",
		},
		{
			image: "icon-gift.svg",
			name: "Exclusive benefits",
			description: "Special offers and swag when you subscribe, including 30% off your first shipment.",
			alt: "present icon",
		},
		{
			image: "icon-truck.svg",
			name: "Free shipping",
			description: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
			alt: "truck icon",
		},
	];
	return (
		<div className="container-features">
			<div className="intro-features">
				<h2 className="heading-features">Why choose us?</h2>
				<p className="description-features">
					A large part of our role is choosing which particular coffees will be featured in our range. This
					means working closely with the best coffee growers to give you a more impactful experience on every
					level.
				</p>
			</div>
			<div>
				{featuresList.map((feature) => (
					<FeatureCard
						image={feature.image}
						name={feature.name}
						description={feature.description}
						alt={feature.alt}
					/>
				))}
			</div>
		</div>
	);
}
