import React from "react";
import "./Header.css";

export default function Header() {
	return (
		<div className="container-header">
			<img className="logo-header" src="assets/img/shared/desktop/logo.svg" alt="company logo" />
			<img
				className="icon-hamburger"
				src="assets/img/shared/mobile/icon-hamburger.svg"
				alt="dropdown menu icon"
			/>
		</div>
	);
}
