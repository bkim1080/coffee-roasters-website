import React from "react";

import Button from "../../UI/Button";
import Card from "../../UI/Card";

import "./SignUpModal.css";

export default function SignUpModal(props) {
	return (
		<React.Fragment>
			<div className="backdrop-signup-modal" onClick={props.onClick} />
			<Card className="container-signup-modal">
				<div className="heading-signup-modal">
					<h2>Email List</h2>
				</div>
				<div className="body-signup-modal">
					<div>
						<form action=""></form>
						<Button onClick={props.onClick}>Subscribe</Button>
					</div>
				</div>
			</Card>
		</React.Fragment>
	);
}
