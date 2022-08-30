import React, { useState, useEffect } from "react";
import styles from "./Commitment.module.css";

export default function Commitment() {
	const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1440);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

	const updateTabletImage = () => {
		setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1440);
	};
	const updateDesktopImage = () => {
		setIsDesktop(window.innerWidth >= 1440);
	};

	useEffect(() => {
		window.addEventListener("resize", updateTabletImage);
		window.addEventListener("resize", updateDesktopImage);
		return () => {
			window.removeEventListener("resize", updateTabletImage);
			window.removeEventListener("resize", updateDesktopImage);
		};
	});

	return (
		<section className={styles.container}>
			<div className={styles.content}>
				{isTablet ? (
					<img
						className={styles.image}
						src="/assets/img/about/tablet/image-commitment.jpg"
						alt="barista pouring cream"
					/>
				) : isDesktop ? (
					<img
						className={styles.image}
						src="/assets/img/about/desktop/image-commitment.jpg"
						alt="barista pouring cream"
					/>
				) : (
					<img
						className={styles.image}
						src="/assets/img/about/mobile/image-commitment.jpg"
						alt="barista pouring cream"
					/>
				)}
				<div className={styles.text}>
					<h2 className={styles.heading}>Our Commitment</h2>
					<p className={styles.description}>
						We’re built on a simple mission and a commitment to doing good along the way. We want to make it
						easy for you to discover and brew the world’s best coffee at home. It all starts at the source.
						To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to
						understand the challenges and opportunities in each of these places. We collaborate with
						exceptional coffee growers and empower a global community of farmers through with well above
						fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in
						coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting
						profiles distinctive to their native growing region.
					</p>
				</div>
			</div>
		</section>
	);
}
