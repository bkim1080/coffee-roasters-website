import React from "react";
import CoffeeBean from "./CoffeeBean";
import { coffeeList } from "../../../data";
import "./OurCollection.css";

export default function OurCollection() {
	return (
		<section className="container-collection">
			<p className="heading-collection">our collection</p>
			<div className="coffee-collection">
				{coffeeList.map((coffee) => {
					const { id, image, name, description } = coffee;
					return <CoffeeBean key={id} image={image} name={name} description={description} />;
				})}
			</div>
		</section>
	);
}
