import React from "react";
import Collection from "../Home/Collection/Collection";
import Features from "../Home/Features/Features";
import HeroHome from "../Home/HeroHome";
import Plan from "../Home/Plan/Plan";

export default function HomePage() {
	return (
		<React.Fragment>
			<HeroHome />
			<Collection />
			<Features />
			<Plan />
		</React.Fragment>
	);
}
