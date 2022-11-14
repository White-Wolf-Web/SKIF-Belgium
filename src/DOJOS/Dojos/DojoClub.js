import React from "react";
import "./DojoClub.css";
import { useParams } from "react-router-dom";
import DojoData from "../../DATAS/DojoData";
import Carrousel from "../../CAROUSEL/Carrousel";
import InstructorCard from "../DojoCard/InstructorCard";
import ChiefInstructorCard from "../DojoCard/ChiefInstructorCard";

import DojoSchedules from "./DojoSchedules";
import DojoContact from "./DojoContact";
import DojoAdress from "./DojoAdress";

export default function DojoClub(props) {
    const { id } = useParams();
    const dojoClub = DojoData.findIndex((obj) => obj.id === id);
    console.log(DojoData[dojoClub].pictures);
    
    return (
        <main>
            <h1>{DojoData[dojoClub].club}</h1>

            <Carrousel />
            <div>
           
            <div className="galleryInstructorDojo">
            {DojoData.map((DojoData) => (
                    
                    <ChiefInstructorCard className="galleryInstructorDojoCard"
                        chiefInstructeurPic={DojoData.chiefInstructeurPic}
                        chiefInstructeurRank={DojoData.chiefInstructeurRank}
                        ChiefInstructeurPosition={DojoData.ChiefInstructeurPosition}
                        chiefInstructeurName={DojoData.chiefInstructeurName}
                        key={id + DojoData.chiefInstructeurName}
                    />
                ))}



                {DojoData.map((DojoData) => (
                    
                    <InstructorCard className="galleryInstructorDojoCard"
                        instructeurPic={DojoData.instructeurPic}
                        instructeurName={DojoData.instructeurName}
                        instructeurRank={DojoData.instructeurRank}
                        instructeurPosition={DojoData.instructeurPosition}

                        key={id + DojoData.instructeurPosition}
                    />
                ))}
            </div>  
</div>


            <div className="dojoShedules">
                {" "}
                <h2>Horaires</h2>
                <DojoSchedules
                    scheduleMonday={DojoData[dojoClub].scheduleMonday.map((item) => (
                        <li key={item + 1 + id}>{item}</li>
                    ))}
                    scheduleTuesday={DojoData[dojoClub].scheduleTuesday.map((item) => (
                        <li key={item + 2 + id}>{item}</li>
                    ))}
                    scheduleWednesday={DojoData[dojoClub].scheduleWednesday.map((item) => (
                        <li key={item + 3 + id}>{item}</li>
                    ))}
                    scheduleThursday={DojoData[dojoClub].scheduleThursday.map((item) => (
                        <li key={item + 4 + id}>{item}</li>
                    ))}
                    scheduleFriday={DojoData[dojoClub].scheduleFriday.map((item) => (
                        <li key={item + 5 + id}>{item}</li>
                    ))}
                    scheduleSaturday={DojoData[dojoClub].scheduleSaturday.map((item) => (
                        <li key={item + 6 + id}>{item}</li>
                    ))}
                    scheduleSunday={DojoData[dojoClub].scheduleSunday.map((item) => (
                        <li key={item + 7 + id}>{item}</li>
                    ))}
                />
            </div>
            <h2>Contact</h2>

            <div className="dojoContact">
                <DojoContact
                    contactMail={DojoData[dojoClub].contactMail}
                    phone={DojoData[dojoClub].phone}
                    website={DojoData[dojoClub].website}
                />
            </div>
            <h2>Adresse</h2>
            <div className="dojoContact">
                <DojoAdress
                 addressStreet={DojoData[dojoClub].addressStreet}
                 addressNumber={DojoData[dojoClub].addressNumber}
                 addressPostalCode={DojoData[dojoClub].addressPostalCode}
                 addressCity={DojoData[dojoClub].addressCity}
                 province={DojoData[dojoClub].province}
                                 />
                                
            </div>
            <div>
            </div>
        </main>
    ) 
}
