import React, { useState, useEffect } from "react";

import Card from "../UI/Card";

import "./Quality.css";

export default function Quality() {
	const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);

	const updateImage = () => {
		setIsTablet(window.innerWidth >= 768);
	};

	useEffect(() => {
		window.addEventListener("resize", updateImage);
		return () => window.removeEventListener("resize", updateImage);
	});

	return (
		<section className="container-quality">
			<div className="contents-quality">
				{isTablet ? (
					<img
						className="image-quality"
						src="/assets/img/about/tablet/image-quality.jpg"
						alt="cup of coffee"
					/>
				) : (
					<img
						className="image-quality"
						src="/assets/img/about/mobile/image-quality.jpg"
						alt="cup of coffee"
					/>
				)}
				<div className="text-quality">
					<h2 className="heading-quality">Uncompromising quality</h2>
					<div className="description-quality">
						Although we work with growers who pay close attention to all stages of harvest and processing,
						we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the
						coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to
						roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
					</div>
				</div>
			</div>
			<Card className="card-quality">
				{isTablet ? (
					<img
						className="bg-image-quality"
						src="/assets/img/about/tablet/bg-quality.png"
						alt="navy blue background"
					/>
				) : (
					<img
						className="bg-image-quality"
						src="/assets/img/about/mobile/bg-quality.png"
						alt="navy blue background"
					/>
				)}
			</Card>
		</section>
	);
}
