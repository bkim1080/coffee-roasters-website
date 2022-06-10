import React from "react";
import "./CoffeeBeans.css";

export default function CoffeeBeans(props) {
	return (
		<div className="container-coffeebeans">
			<img className="image-coffeebeans" src={`/assets/img/home/desktop/${props.image}`} alt="coffee beans bag" />
			<div className="text-coffebeans">
				<h4 className="heading-coffeebeans">{props.name}</h4>
				<p className="description-coffeebeans">{props.description}</p>
			</div>
		</div>
	);
}
