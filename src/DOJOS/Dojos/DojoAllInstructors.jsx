import React from "react";
import DojoData from "../../DATAS/DojoData";
import ChiefInstructorCard from "../DojoCard/ChiefInstructorCard";
import InstructorCard from "../DojoCard/InstructorCard";
import { useParams } from "react-router-dom";
import "./DojoClub.css";
import "../../i18n";
import { useTranslation } from "react-i18next";

export default function DojoAllInstructors() {
    const { id } = useParams();
    const { t } = useTranslation();
    const dojoClub = DojoData.findIndex((obj) => obj.id === id);
    const instructors = DojoData[dojoClub].instructeurs;
    const chiefInstructors = DojoData[dojoClub].chiefInstructeur;

    return (
        <div className="galleryInstructorDojo">
            <div>
                <ChiefInstructorCard
                    className=""
                    chiefInstructeurPic={chiefInstructors.pic}
                    chiefInstructeurRank={t("words.rank") + chiefInstructors.rank}
                    ChiefInstructeurPosition={t("words.chiefInstructor")}
                    chiefInstructeurName={chiefInstructors.name}
                    key={id + chiefInstructors.name}
                />
            </div>
            {instructors.length !== 0 ? (
                <div className="dojoInstructors">
                    {instructors.map((element) => (
                        <InstructorCard
                            instructeurPic={element.pic}
                            instructeurRank={t("words.rank") + element.rank}
                            instructeurPosition={t("words.instructor")}
                            instructeurName={element.name}
                            key={element.id + element.name}
                        />
                    ))}
                </div>
            ) : (
                <div className="displayNone">
                    <InstructorCard />
                </div>
            )}
        </div>
    );
}
