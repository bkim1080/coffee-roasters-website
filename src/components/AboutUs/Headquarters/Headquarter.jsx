import React from "react";
import "./Headquarter.css";

export default function Headquarter(props) {
	return (
		<div className="container-headquarter">
			<img
				className="image-headquarter"
				src={`/assets/img/about/desktop/${props.headquarter.image}`}
				alt={props.headquarter.alt}
			/>
			<h3 className="heading-headquarter">{props.headquarter.country}</h3>
			<p className="info-headquarter">
				{props.headquarter.street}
				<br />
				{props.headquarter.town1}
				<br />
				{props.headquarter.town2}
				<br />
				{props.headquarter.phone}
			</p>
		</div>
	);
}
