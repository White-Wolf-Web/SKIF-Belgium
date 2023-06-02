import React, { useState } from "react";
import "./Footer.css";
import LogoSkifWorld from "../ASSETS/IMAGES/logo/logoSkif.webp";
import BroderieSkif from "../ASSETS/IMAGES/Broderie/skifBroderie.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useDocumentDownload from "../UTILS/useDocumentDownload.js";
import ContactModal from "../UTILS/modalContact";

import ".././i18n";

export default function Footer() {
	const { t } = useTranslation();

	const handleDocumentDownload = useDocumentDownload();
	const [showContactModal, setShowContactModal] = useState(false);

	const handleContactClick = () => {
		setShowContactModal(true);
	};

	const handleCloseModal = () => {
		setShowContactModal(false);
	};

	return (
		<footer id="footer">
			<div className="container">
				<ul className="footer__liens">
					<li>
						<a href="https://skifb-link.be/p_nieuw_lid.php" target="_blank" rel="noopener noreferrer">
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
						<Link to="/photos">
							<i className="fa-solid fa-camera"></i>
							{t("footer.photo")}
						</Link>
					</li>
					<>
						<li>
							<button onClick={handleContactClick} className="link-button">
								<i className="fa-solid fa-envelope"></i> Contact
							</button>
						</li>

						{showContactModal && <ContactModal show={showContactModal} handleClose={handleCloseModal} />}
					</>

					<li>
						<Link as="div" onClick={() => handleDocumentDownload("39ffc7ac-72db-43cf-a8c1-e942d78ef96d")}>
							<i className="fa-solid fa-scale-balanced"></i>&nbsp;{t("footer.legal_notice")}
						</Link>
					</li>
					<li>
						<i className="fa-solid fa-person"></i>
						<Link as="div" onClick={() => handleDocumentDownload("c0b4a7ef-6f9d-4ec8-905e-1a08722198a2")}>
							{t("footer.privacy_policy")}
						</Link>
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
							<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram">
								<i className="fa-brands fa-instagram" alt="icon Instagram"></i>
							</a>
						</li>

						<li>
							<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
								<i className="fa-brands fa-twitter" alt="icon twitter"></i>
							</a>
						</li>

						<li>
							<a href="https://www.facebook.com/groups/124325430968790" target="_blank" rel="noopener noreferrer" title="Facebook">
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
