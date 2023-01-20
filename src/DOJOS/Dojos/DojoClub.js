import React from "react";
import "./DojoClub.css";
import { useParams } from "react-router-dom";
import DojoData from "../../DATAS/DojoData";
import Carrousel from "../../CAROUSEL/Carrousel";
import DojoAllInstructors from "./DojoAllInstructors";
import DojoSchedules from "./DojoSchedules";
import DojoContact from "./DojoContact";
import DojoAdress from "./DojoAdress";
import "../../i18n";
import { useTranslation } from "react-i18next";

export default function DojoClub(props) {
    const { t } = useTranslation();
    const { id } = useParams();
    const dojoClub = DojoData.findIndex((obj) => obj.id === id);
    const address = DojoData[dojoClub].address;
    const contact = DojoData[dojoClub].contact;
    const schedules = DojoData[dojoClub].schedules;

    return (
        <main>
            <h1>{DojoData[dojoClub].club}</h1>

            <div>
                {" "}
                <Carrousel />
            </div>
            <DojoAllInstructors />

            <h2>{t("words.schedule")}</h2>
            <div className="dojoShedules">
                {schedules.map((item) => (
                    <DojoSchedules
                        key={item + 109 + id + item.toString()}
                        scheduleMonday={item.monday}
                        scheduleTuesday={item.tuesday}
                        scheduleWednesday={item.wednesday}
                        scheduleThursday={item.thursday}
                        scheduleFriday={item.friday}
                        scheduleSaturday={item.saturday}
                        scheduleSunday={item.sunday}
                    />
                ))}
            </div>

            <h2>{t("words.contact")}</h2>

            <div className="dojoContact">
                {contact.map((item) => (
                    <DojoContact
                        key={item + 104 + id + item.toString()}
                        contactMail={item.email}
                        phone={item.phone}
                        website={item.website}
                    />
                ))}
            </div>
            <h2>{t("words.adress")}</h2>
            <div className="dojoAdressCard">
                {address.map((element) => (
                    <DojoAdress
                        key={element.street + element.postCode + 9}
                        street={element.street}
                        number={element.number}
                        postCode={element.postCode}
                        city={element.city}
                        province={element.province}
                        country={element.country}
                    />
                ))}
            </div>
            <div></div>
        </main>
    );
}
