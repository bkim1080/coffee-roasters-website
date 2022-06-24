import React from "react";
import "./Feature.css";

export default function Feature(props) {
	return (
		<div className="container-feature">
			<div className="contents-feature">
				<img className="image-feature" src={`/assets/img/home/desktop/${props.image}`} alt={props.alt} />
				<div className="text-feature">
					<h4 className="heading-feature">{props.name}</h4>
					<p className="description-feature">{props.description}</p>
				</div>
			</div>
		</div>
	);
}
