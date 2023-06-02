import React from "react";
//import DojoData from "../../DATAS/DojoData";
import ChiefInstructorCardBis from "../DojoCard/ChiefInstructorCardBis";
import InstructorCardBis from "../DojoCard/InstructorCardBis";
import { useParams } from "react-router-dom";
import "./DojoClub.css";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { useFetchClub } from '../../UTILS/useFetchClub';

export default function DojoAllInstructors() {
    const { id } = useParams();
    const { t } = useTranslation();
    const url = 'https://skifb-admin.be/api/ClubsAPI/GetClubDetails?Id=DC648F09-903A-4104-9221-1E3E951C0D09';
    const { data: items } = useFetchClub(url);
    if (!items.length) {
        return null;  // ou retournez un indicateur de chargement, ou toute autre chose
    }

    return (
        <div className="galleryInstructorDojo">
        {items.map((item, index) => (
            <div key={index}>
                <ChiefInstructorCardBis
                    className=""
                    chiefInstructeurPic={item.pic}
                    chiefInstructeurRank={t("words.rank") + item.rank}
                    ChiefInstructeurPosition={t("words.chiefInstructor")}
                    chiefInstructeurName={item.chiefInstructor}
                    key={id + item.chiefInstructor}
                />
            </div>
        ))}
    {/*   
               {items.length !== 0 ? (
                <div className="dojoInstructors">
                    {items.map((item) => (
                        <InstructorCardBis
                            instructeurPic={item.pic}
                            instructeurRank={t("words.rank") + item.rank}
                            instructeurPosition={t("words.instructor")}
                            instructeurName={item.name}
                            key={item.id + item.name}
                        />
                    ))}
                </div>
            ) : (
                <div className="displayNone">
                    <InstructorCardBis />
                </div>
            )}*/}
        </div>
    );
}
