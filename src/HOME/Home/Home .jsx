import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import NextEvent from "../NextEvent/NextEvent";
import Modal from "react-modal";
import "../../i18n";
import "./Home.css";

Modal.setAppElement('#root');

export default function Home() {
	const { t } = useTranslation();
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<div>
			<main>
				{" "}
				<h1 className="homeH1">{t("home.title")}</h1>
				<div>
					<section>
						<h2>{t("home.section1_h2")}</h2>
						<p>{t("home.section1_text")}</p>
					</section>
					<section>
						<h2>{t("home.section2_h2")}</h2>
						<p>{t("home.section2_text")}</p>
					</section>
					<section>
						<h2>{t("home.section3_h2")}</h2>
						<p>{t("home.section3_text")}</p>
					</section>
					<section>
						<h2>{t("home.section4_h2")}</h2>
						<p>{t("home.section4_text")}</p>
					</section>
				</div>
				<div className="bottomSection" >
                <img src="/images/Senseis/stephaneCastrique.jpg" alt="kata enpi" className="picBottomSection" />
                <div className="sousSectionBottomSection"   >  
                <p className="japaneseKanjiSkifb">國 際 松 濤 館 空 手 道 ベ ル ギ ー 連 盟</p>
					<button onClick={openModal} className="nextEventButton" >Next Event</button>
					<Modal
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						contentLabel="Next Event"
						style={{
							overlay: {
								backgroundColor: "rgba(0, 0, 0, 0.75)",
							},
							content: {
								color: "lightsteelblue",
								height: "650px",
								width: "500px",
								margin: "auto",
								padding: "20px",
								border: "1px solid #ccc",
								borderRadius: "4px",
							},
						}}
					>
						<h2>Next Event</h2>
						<button onClick={closeModal} className="nextEventCloseModal"  >Close</button>
						<NextEvent />
					</Modal>
					
				</div></div>
			</main>
		</div>
	);
}
