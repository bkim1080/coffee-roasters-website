import React from "react";
import Commitment from "../AboutUs/Commitment";
import Headquarters from "../AboutUs/Headquarters/Headquarters";
import HeroAbout from "../AboutUs/HeroAbout";
import Quality from "../AboutUs/Quality";

export default function AboutUsPage() {
	return (
		<React.Fragment>
			<HeroAbout />
			<Commitment />
			<Quality />
			<Headquarters />
		</React.Fragment>
	);
}
