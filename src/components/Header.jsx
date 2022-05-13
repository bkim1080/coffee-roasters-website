import React, { useState } from "react";
import { pageLinks } from "./data";
import "./Header.css";

export default function Header() {
	const [showLinks, setShowLinks] = useState(false);
	return (
		<div className="container-header">
			<img className="logo-header" src="assets/img/shared/desktop/logo.svg" alt="company logo" />
			{showLinks && (
				<div className="links-header">
					<ul className="links-list-header">
						{pageLinks.map((link) => {
							const { id, url, text } = link;
							return (
								<li className="links-list-item-header" key={id}>
									<a href={url}>{text}</a>
								</li>
							);
						})}
					</ul>
				</div>
			)}
			<img
				className="icon-hamburger"
				src={
					showLinks
						? "assets/img/shared/mobile/icon-close.svg"
						: "assets/img/shared/mobile/icon-hamburger.svg"
				}
				alt="dropdown menu icon"
				onClick={() => setShowLinks(!showLinks)}
			/>
		</div>
	);
}
