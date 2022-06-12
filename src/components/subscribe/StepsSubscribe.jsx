import React, { useState, useEffect } from "react";
import PlanSteps from "../PlanSteps";
import "./StepsSubscribe.css";

export default function StepsSubscribe() {
	const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);

	const updateImage = () => {
		setIsTablet(window.innerWidth >= 768);
	};

	useEffect(() => {
		window.addEventListener("resize", updateImage);
		return () => window.removeEventListener("resize", updateImage);
	});

	return (
		<section className="container-steps-subscribe">
			<div className="plan-steps-subscribe">
				<PlanSteps headingClass="name-steps-subscribe" descriptionClass="description-steps-subscribe" />
			</div>
			{isTablet ? (
				<img
					className="bg-steps-subscribe"
					src="/assets/img/plan/tablet/bg-steps.png"
					alt="navy blue background"
				/>
			) : (
				<img
					className="bg-steps-subscribe"
					src="/assets/img/plan/mobile/bg-steps.png"
					alt="navy blue background"
				/>
			)}
		</section>
	);
}
