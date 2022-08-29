import React, { useState, useEffect } from "react";
import "./Quality.css";

import Card from "../UI/Card";

export default function Quality() {
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
		<section className="container-quality">
			{isTablet ? (
				<img className="image-quality" src="/assets/img/about/tablet/image-quality.jpg" alt="cup of coffee" />
			) : isDesktop ? (
				<img className="image-quality" src="/assets/img/about/desktop/image-quality.jpg" alt="cup of coffee" />
			) : (
				<img className="image-quality" src="/assets/img/about/mobile/image-quality.jpg" alt="cup of coffee" />
			)}
			<Card className="card-quality">
				<div className="text-quality">
					<h2 className="heading-quality">Uncompromising quality</h2>
					<div className="description-quality">
						Although we work with growers who pay close attention to all stages of harvest and processing,
						we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the
						coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to
						roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
					</div>
				</div>
			</Card>
		</section>
	);
}
