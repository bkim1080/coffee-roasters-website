import React from "react";
import FeatureCard from "./FeatureCard";
import { featuresList } from "../data";
import "./Features.css";

export default function Features() {
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
				{featuresList.map((feature) => {
					const { id, image, name, description, alt } = feature;
					return <FeatureCard key={id} image={image} name={name} description={description} alt={alt} />;
				})}
			</div>
		</div>
	);
}
