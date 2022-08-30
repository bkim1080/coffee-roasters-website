import React, { useContext } from "react";
import PlanDetailsContext from "../../../context/plan-details-context";
import styles from "./PlanList.module.css";

export default function PlanList() {
	const ctx = useContext(PlanDetailsContext);
	return (
		<div className={styles.container}>
			<ul>
				<li className={`${styles.item} ${ctx.planDetails.coffeeForm && styles.selected}`}>
					<span className={styles.number}>01</span>Preferences
				</li>
				<hr className={styles.hr} />
				<li className={`${styles.item} ${ctx.planDetails.coffeeType && styles.selected}`}>
					<span className={styles.number}>02</span>Bean Type
				</li>
				<hr className={styles.hr} />
				<li className={`${styles.item} ${ctx.planDetails.coffeeAmount && styles.selected}`}>
					<span className={styles.number}>03</span>Quantity
				</li>
				<hr className={styles.hr} />
				<li
					className={`${styles.item} ${ctx.planDetails.coffeeGrind && styles.selected}${
						ctx.planDetails.coffeeForm === "Capsule" ? styles.disabled : ""
					}`}
				>
					<span className={styles.number}>04</span>Grind Option
				</li>
				<hr className={styles.hr} />
				<li className={`${styles.item} ${ctx.planDetails.deliverySchedule && styles.selected}`}>
					<span className={styles.number}>05</span>Deliveries
				</li>
			</ul>
		</div>
	);
}
