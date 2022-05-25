import React from "react";
import "./Quality.css";
import Card from "../UI/Card";

export default function Quality() {
	return (
		<section className="container-quality">
			<Card className="card-quality">
				<div className="contents-quality">
					<img
						className="image-quality"
						src="/assets/img/about/mobile/image-quality.jpg"
						alt="cup of coffee"
					/>
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
