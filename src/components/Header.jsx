import React, { useState } from "react";
import { pageLinks } from "../data";
import "./Header.css";

export default function Header() {
	const [isLinksShown, setIsLinksShown] = useState(false);
	return (
		<header>
			<nav>
				<div className="container-header">
					<img className="logo-header" src="assets/img/shared/desktop/logo.svg" alt="coffeeroasters logo" />
					<img
						className="menu-icon-header"
						src={
							isLinksShown
								? "assets/img/shared/mobile/icon-close.svg"
								: "assets/img/shared/mobile/icon-hamburger.svg"
						}
						alt="dropdown menu icon"
						onClick={() => setIsLinksShown((prevIsLinksShown) => !prevIsLinksShown)}
					/>
					<div className="links-desktop-header">
						<ul className="links-list-desktop-header">
							{pageLinks.map((link) => {
								return (
									<li key={link.id}>
										<a href={link.url}>{link.text}</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				{isLinksShown && (
					<div className="links-mobile-header">
						<ul className="links-list-mobile-header">
							{pageLinks.map((link) => {
								return (
									<li key={link.id}>
										<a href={link.url}>{link.text}</a>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
}
