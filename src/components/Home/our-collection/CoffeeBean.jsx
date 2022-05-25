import React from "react";
import "./CoffeeBean.css";

export default function CoffeeBean(props) {
	return (
		<div className="container-coffeebean">
			<img className="image-coffeebean" src={`/assets/img/home/desktop/${props.image}`} alt="coffee beans bag" />
			<div>
				<h4 className="heading-coffeebean">{props.name}</h4>
				<p className="description-coffeebean">{props.description}</p>
			</div>
		</div>
	);
}
