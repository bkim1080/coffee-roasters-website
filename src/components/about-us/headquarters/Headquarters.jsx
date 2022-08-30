import React from "react";
import { headquartersList } from "../../../data";
import styles from "./Headquarters.module.css";

import Headquarter from "./Headquarter";

export default function Headquarters() {
	return (
		<section className={styles.container}>
			<h4 className={styles.heading}>Our headquarters</h4>
			<div className={styles.list}>
				{headquartersList.map((headquarter) => {
					return <Headquarter key={headquarter.id} headquarter={headquarter} />;
				})}
			</div>
		</section>
	);
}
