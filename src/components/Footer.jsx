import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="container-footer">
			<div className="content-footer">
				<img className="logo-footer" src="assets/img/shared/desktop/logo.svg" alt="company logo" />
				<div className="links-footer">
					<ul className="links-list-footer">
						<li className="links-list-item-footer">
							<a href="">HOME</a>
						</li>
						<li className="links-list-item-footer">
							<a href="">ABOUT US</a>
						</li>
						<li className="links-list-item-footer">
							<a href="">CREATE YOUR PLAN</a>
						</li>
					</ul>
				</div>
				<div className="social-icons-footer">
					<img src="assets/img/shared/desktop/icon-facebook.svg" alt="Facebook icon" />
					<img src="assets/img/shared/desktop/icon-twitter.svg" alt="Twitter icon" />
					<img src="assets/img/shared/desktop/icon-instagram.svg" alt="Instagram icon" />
				</div>
			</div>
		</div>
	);
}
