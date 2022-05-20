import React from "react";
import Step from "./Step";
import { stepsList } from "../../data";
import "./Steps.css";

export default function Steps(props) {
	return (
		<React.Fragment>
			{stepsList.map((step) => {
				const { id, num, name, description } = step;
				return (
					<Step
						key={id}
						num={num}
						heading={name}
						description={description}
						headingClass={props.headingClass}
						descriptionClass={props.descriptionClass}
					/>
				);
			})}
		</React.Fragment>
	);
}
