import React from "react";
import "./FeatureCard.css";

export default function FeatureCard(props) {
	return (
		<div className="container-feature-card">
			<div className="contents-feature-card">
				<img className="image-feature-card" src={`/assets/img/home/desktop/${props.image}`} alt={props.alt} />
				<div>
					<h4 className="heading-feature-card">{props.name}</h4>
					<p className="description-feature-card">{props.description}</p>
				</div>
			</div>
		</div>
	);
}
