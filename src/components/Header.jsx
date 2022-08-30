import React, { useState } from "react";
import { pageLinks } from "../data";
import styles from "./Header.module.css";

export default function Header() {
	const [isLinksShown, setIsLinksShown] = useState(false);
	return (
		<header>
			<nav>
				<div className={styles.container}>
					<img className={styles.logo} src="assets/img/shared/desktop/logo.svg" alt="coffeeroasters logo" />
					<img
						className={`${styles["menu-icon"]}`}
						src={
							isLinksShown
								? "assets/img/shared/mobile/icon-close.svg"
								: "assets/img/shared/mobile/icon-hamburger.svg"
						}
						alt="dropdown menu icon"
						onClick={() => setIsLinksShown((prevIsLinksShown) => !prevIsLinksShown)}
					/>
					<div className={`${styles["links-desktop"]}`}>
						<ul className={`${styles["links-list-desktop"]}`}>
							{pageLinks.map((link) => {
								return (
									<li key={link.id}>
										<a href={link.url}>{link.text}</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				{isLinksShown && (
					<div className={`${styles["links-mobile"]}`}>
						<ul className={`${styles["links-list-mobile"]}`}>
							{pageLinks.map((link) => {
								return (
									<li key={link.id}>
										<a href={link.url}>{link.text}</a>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
}
