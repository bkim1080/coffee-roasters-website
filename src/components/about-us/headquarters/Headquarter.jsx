import React from "react";
import styles from "./Headquarter.module.css";

export default function Headquarter(props) {
	return (
		<div className={styles.container}>
			<img
				className={styles.image}
				src={`/assets/img/about/desktop/${props.headquarter.image}`}
				alt={props.headquarter.alt}
			/>
			<h3 className={styles.heading}>{props.headquarter.country}</h3>
			<p className={styles.info}>
				{props.headquarter.street}
				<br />
				{props.headquarter.town1}
				<br />
				{props.headquarter.town2}
				<br />
				{props.headquarter.phone}
			</p>
		</div>
	);
}
