import React from "react";
import KaratekaCard from "./KaratekaCard";
import karatekasData from "../DATAS/karatekasData";
//import { useParams } from "react-router-dom";
import "../i18n";
import { Link } from "react-router-dom";
//import { useTranslation } from "react-i18next";

export default function Karatekas() {
	//const { t } = useTranslation();

	return (
		<main>
			<h1>SKIFB Karatekas</h1>

			<div>
				{karatekasData.map((element) => (
					<Link to={"/karatekas/" + element.id} key={element.id}>
						<KaratekaCard
							cover={element.karateka.pic}
							rank={element.karateka.rank}
							skifPosition={element.karateka.skifPosition}
							town={element.karateka.town}
              name={element.karateka.name}
							mention={element.karateka.mention}
							key={element.id + element.name}
						/>
					</Link>
				))}
			</div>
		</main>
	);
}
