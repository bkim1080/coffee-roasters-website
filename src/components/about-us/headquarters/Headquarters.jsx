import React from "react";
import Headquarter from "./Headquarter";
import { headquartersList } from "../../../data";
import "./Headquarters.css";

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
