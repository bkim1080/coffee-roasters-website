import React from "react";
import Collection from "../home/Collection/Collection";
import Features from "../home/Features/Features";
import HeroHome from "../home/HeroHome";
import HowItWorks from "../home/HowItWorks";

export default function HomePage() {
	return (
		<React.Fragment>
			<HeroHome />
			<Collection />
			<Features />
			<HowItWorks />
		</React.Fragment>
	);
}
