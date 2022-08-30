import React from "react";
import styles from "./CoffeeBean.module.css";

export default function CoffeeBean(props) {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={`/assets/img/home/desktop/${props.image}`} alt="coffee beans bag" />
			<div className={styles.text}>
				<h4 className={styles.heading}>{props.name}</h4>
				<p className={styles.description}>{props.description}</p>
			</div>
		</div>
	);
}
