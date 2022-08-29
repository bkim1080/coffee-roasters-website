import React from "react";
import { headquartersList } from "../../../data";
import "./Headquarters.css";

import Headquarter from "./Headquarter";

export default function Headquarters() {
	return (
		<section className="container-headquarters">
			<h4 className="heading-headquarters">Our headquarters</h4>
			<div className="list-headquarters">
				{headquartersList.map((headquarter) => {
					return <Headquarter key={headquarter.id} headquarter={headquarter} />;
				})}
			</div>
		</section>
	);
}
