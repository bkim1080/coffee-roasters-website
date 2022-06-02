import React from "react";

import Commitment from "../about-us/Commitment";
import Headquarters from "../about-us/headquarters/Headquarters";
import HeroAbout from "../about-us/HeroAbout";
import Quality from "../about-us/Quality";

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
