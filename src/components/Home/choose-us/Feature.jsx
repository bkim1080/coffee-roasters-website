import React from "react";
import styles from "./Feature.module.css";

export default function Feature(props) {
	return (
		<div className={styles.container}>
			<div className={styles.contents}>
				<img className={styles.image} src={`/assets/img/home/desktop/${props.image}`} alt={props.alt} />
				<div className={styles.text}>
					<h4 className={styles.heading}>{props.name}</h4>
					<p className={styles.description}>{props.description}</p>
				</div>
			</div>
		</div>
	);
}
