import React from "react";
import styles from "./HeroAbout.module.css";

import Card from "../UI/Card";

export default function HeroAbout() {
	return (
		<section className={styles.container}>
			<Card className={styles.card}>
				<div className={styles.contents}>
					<h2 className={styles.heading}>About Us</h2>
					<p className={styles.description}>
						Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee
						from around the world. We have since been dedicated to bring the perfect cup - from bean to brew
						- in every shipment.
					</p>
				</div>
			</Card>
		</section>
	);
}
