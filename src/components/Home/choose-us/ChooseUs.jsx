import React from "react";
import { featuresList } from "../../../data";
import "./ChooseUs.css";

import Card from "../../UI/Card";
import Feature from "./Feature";

export default function ChooseUs() {
	return (
		<section className="container-choose">
			<Card className="card-choose">
				<div className="intro-text-choose">
					<h2 className="heading-choose">Why choose us?</h2>
					<p className="description-choose">
						A large part of our role is choosing which particular coffees will be featured in our range.
						This means working closely with the best coffee growers to give you a more impactful experience
						on every level.
					</p>
				</div>
			</Card>
			<div className="feature-cards-choose">
				{featuresList.map((feature) => {
					const { id, image, name, description, alt } = feature;
					return <Feature key={id} image={image} name={name} description={description} alt={alt} />;
				})}
			</div>
		</section>
	);
}
