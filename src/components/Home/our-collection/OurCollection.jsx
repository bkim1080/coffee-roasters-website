import React from "react";
import { coffeeList } from "../../../data";
import styles from "./OurCollection.module.css";

import CoffeeBean from "./CoffeeBean";

export default function OurCollection() {
	return (
		<section className={styles.container}>
			<p className={styles.heading}>our collection</p>
			<div className={styles.coffeebeans}>
				{coffeeList.map((coffee) => {
					const { id, image, name, description } = coffee;
					return <CoffeeBean key={id} image={image} name={name} description={description} />;
				})}
			</div>
		</section>
	);
}
