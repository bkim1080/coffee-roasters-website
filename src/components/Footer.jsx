import React from "react";
import { pageLinks } from "../data";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.content}>
				<img className={styles.logo} src="assets/img/shared/desktop/logo.svg" alt="company logo" />
				<div className={styles.links}>
					<ul className={`${styles["links-list"]}`}>
						{pageLinks.map((link) => {
							return (
								<li className={`${styles["links-item"]}`} key={link.id}>
									<a href={link.url}>{link.text}</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={`${styles["social-icons"]}`}>
					<a href="https://facebook.com">
						<img src="assets/img/shared/desktop/icon-facebook.svg" alt="Facebook icon" />
					</a>
					<a href="https://twitter.com">
						<img src="assets/img/shared/desktop/icon-twitter.svg" alt="Twitter icon" />
					</a>
					<a href="https://instagram.com">
						<img src="assets/img/shared/desktop/icon-instagram.svg" alt="Instagram icon" />
					</a>
				</div>
			</div>
		</footer>
	);
}
