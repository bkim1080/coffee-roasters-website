import React from "react";
import { pageLinks } from "../data";
import "./Footer.css";

export default function Footer() {
	return (
		<footer className="container-footer">
			<div className="content-footer">
				<img className="logo-footer" src="assets/img/shared/desktop/logo.svg" alt="company logo" />
				<div className="links-footer">
					<ul className="links-list-footer">
						{pageLinks.map((link) => {
							return (
								<li className="links-list-item-footer" key={link.id}>
									<a href={link.url}>{link.text}</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="social-icons-footer">
					<a href="https://facebook.com">
						<img src="assets/img/shared/desktop/icon-facebook.svg" alt="Facebook icon" />
					</a>
					<a href="https://twitter.com">
						<img src="assets/img/shared/desktop/icon-twitter.svg" alt="Twitter icon" />
					</a>
					<a href="https://instagram.com">
						<img src="assets/img/shared/desktop/icon-instagram.svg" alt="Instagram icon" />
					</a>
				</div>
			</div>
		</footer>
	);
}
