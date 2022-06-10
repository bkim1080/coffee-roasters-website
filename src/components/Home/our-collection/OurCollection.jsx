import React from "react";
import CoffeeBeans from "./CoffeeBeans";
import { coffeeList } from "../../../data";
import "./OurCollection.css";

export default function OurCollection() {
	return (
		<section className="container-collection">
			<p className="heading-collection">our collection</p>
			<div className="coffeebean-collection">
				{coffeeList.map((coffee) => {
					const { id, image, name, description } = coffee;
					return <CoffeeBeans key={id} image={image} name={name} description={description} />;
				})}
			</div>
		</section>
	);
}
