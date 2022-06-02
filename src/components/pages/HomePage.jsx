import React from "react";

import ChooseUs from "../home/choose-us/ChooseUs";
import HeroHome from "../home/HeroHome";
import HowItWorks from "../home/how-it-works/HowItWorks";
import OurCollection from "../home/our-collection/OurCollection";

export default function HomePage() {
	return (
		<React.Fragment>
			<HeroHome />
			<OurCollection />
			<ChooseUs />
			<HowItWorks />
		</React.Fragment>
	);
}
