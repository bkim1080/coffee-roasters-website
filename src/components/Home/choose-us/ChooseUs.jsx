import React from "react";
import Card from "../../UI/Card";
import FeatureCard from "./FeatureCard";
import { featuresList } from "../../../data";
import "./ChooseUs.css";

export default function ChooseUs() {
	return (
		<section className="container-choose">
			<Card className="card-choose">
				<h2 className="heading-choose">Why choose us?</h2>
				<p className="description-choose">
					A large part of our role is choosing which particular coffees will be featured in our range. This
					means working closely with the best coffee growers to give you a more impactful experience on every
					level.
				</p>
			</Card>
			<div className="feature-cards-choose">
				{featuresList.map((feature) => {
					const { id, image, name, description, alt } = feature;
					return <FeatureCard key={id} image={image} name={name} description={description} alt={alt} />;
				})}
			</div>
		</section>
	);
}
