import React from "react";
import styles from "./HeroSubscribe.module.css";

import Card from "../UI/Card";

export default function HeroSubscribe() {
	return (
		<section className={styles.container}>
			<Card className={styles.card}>
				<div className={styles.contents}>
					<h1 className={styles.heading}>Create a plan</h1>
					<p className={styles.description}>
						Build a subscription plan that best fits your needs. We offer an assortment of the best artisan
						coffees from around the globe delivered fresh to your door.
					</p>
				</div>
			</Card>
		</section>
	);
}
