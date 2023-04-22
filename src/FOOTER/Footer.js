import React from "react";
import "./Footer.css";
import LogoSkifWorld from "../ASSETS/IMAGES/logo/logoSkif.webp";
import BroderieSkif from "../ASSETS/IMAGES/Broderie/skifBroderie.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ".././i18n";

export default function Footer() {
	const { t } = useTranslation();
	return (
		<footer id="footer">
			<div className="container">
				<ul className="footer__liens">
					<li>
						<a>
							<i className="fa-solid fa-certificate"></i>
							{t("footer.becoming_a_member")}
						</a>
					</li>
					<li>
						<Link to="/dojoslist">
							<i className="fa-solid fa-dungeon"></i>&nbsp;{t("footer.dojo")}
						</Link>
					</li>
					<li>
						<a>
							<i className="fa-solid fa-camera"></i>
							{t("footer.photo")}
						</a>
					</li>
					<li>
						<a>
							<i className="fa-solid fa-envelope"></i> {t("footer.contact")}
						</a>
					</li>

					<li>
						<Link to="/calendar">
							<i className="fa-solid fa-scale-balanced"></i>&nbsp;{t("footer.legal_notice")}
						</Link>
					</li>
					<li>
						<a>
							<i className="fa-solid fa-person"></i>
							{t("footer.privacy_policy")}
						</a>
					</li>

					<li>
						<Link to="/terms">
							<i className="fa-solid fa-file"></i>
							{t("footer.conditions")}
						</Link>
					</li>
				</ul>
				<div className="broderieSociale">
					<img
						src={BroderieSkif}
						alt="Broderie que l'on retrouve sur les kimonos de karaté skif"
						className="skifBroderie"
						width="70px"
						height="130px"
						loading="lazy"
						title="true"
					/>
					<ul className="icons">
						<li>
							<a href="#">
								<i className="fa-brands fa-instagram" alt="icon Instagram"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa-brands fa-twitter" alt="icon twitter"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa-brands fa-facebook" alt="icon Facebook"></i>
							</a>
						</li>
					</ul>
				</div>
				<div className="logoSkifWorld">
					<img src={LogoSkifWorld} alt="logo Skif world basé au Japon" width="175px" height="175px" title="true" loading="lazy" />
				</div>
			</div>
            <div className="post-footer">©copyright 2023</div>
		</footer>
	);
}
