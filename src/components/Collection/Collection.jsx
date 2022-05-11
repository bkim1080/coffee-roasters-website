import React from "react";
import CoffeeBeans from "./CoffeeBeans";
import "./Collection.css";

export default function Collection() {
	const coffeeCollection = [
		{
			image: "image-gran-espresso.png",
			name: "Gran Expresso",
			description: "Light and flavorful blend with cocoa and black pepper for an intense experience",
		},
		{
			image: "image-planalto.png",
			name: "Planalto",
			description: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
		},
		{
			image: "image-piccollo.png",
			name: "Piccollo",
			description: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
		},
		{
			image: "image-danche.png",
			name: "Danche",
			description: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
		},
	];
	return (
		<div className="container-collection">
			<p className="heading-collection">our collection</p>
			<div>
				{coffeeCollection.map((coffee) => (
					<CoffeeBeans image={coffee.image} name={coffee.name} description={coffee.description} />
				))}
			</div>
		</div>
	);
}
