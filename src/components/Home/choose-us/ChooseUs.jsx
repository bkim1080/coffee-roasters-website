import React from "react";
import { featuresList } from "../../../data";
import styles from "./ChooseUs.module.css";

import Card from "../../UI/Card";
import Feature from "./Feature";

export default function ChooseUs() {
	return (
		<section className={styles.container}>
			<Card className={styles.card}>
				<div className={`${styles["intro-text"]}`}>
					<h2 className={styles.heading}>Why choose us?</h2>
					<p className={styles.description}>
						A large part of our role is choosing which particular coffees will be featured in our range.
						This means working closely with the best coffee growers to give you a more impactful experience
						on every level.
					</p>
				</div>
			</Card>
			<div className={`${styles["feature-cards"]}`}>
				{featuresList.map((feature) => {
					const { id, image, name, description, alt } = feature;
					return <Feature key={id} image={image} name={name} description={description} alt={alt} />;
				})}
			</div>
		</section>
	);
}
