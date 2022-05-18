import React from "react";
import CoffeeBeans from "./CoffeeBeans";
import { coffeeCollection } from "../../../data";
import "./Collection.css";

export default function Collection() {
	return (
		<div className="container-collection">
			<p className="heading-collection">our collection</p>
			<div>
				{coffeeCollection.map((coffee) => {
					const { id, image, name, description } = coffee;
					return <CoffeeBeans key={id} image={image} name={name} description={description} />;
				})}
			</div>
		</div>
	);
}
