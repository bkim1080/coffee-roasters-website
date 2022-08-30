import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroHome.module.css";

import Button from "../UI/Button";
import Card from "../UI/Card";

export default function Hero() {
	return (
		<section className={styles.container}>
			<Card className={styles.card}>
				<div className={styles.contents}>
					<h1 className={styles.heading}>Great coffee made simple.</h1>
					<p className={styles.description}>
						Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from
						our best roasters delivered directly to your door, at your schedule.
					</p>
					<Link to="/subscribe">
						<Button>Create your plan</Button>
					</Link>
				</div>
			</Card>
		</section>
	);
}
