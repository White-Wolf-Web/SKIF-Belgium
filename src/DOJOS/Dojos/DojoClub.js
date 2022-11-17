import React from "react";
import "./DojoClub.css";
import { useParams } from "react-router-dom";
import DojoData from "../../DATAS/DojoData";
import Carrousel from "../../CAROUSEL/Carrousel";
import InstructorCard from "../DojoCard/InstructorCard";
import ChiefInstructorCard from "../DojoCard/ChiefInstructorCard";
//import Instructor2Card from "../DojoCard/Instructor2Card";
//import Instructor3Card from "../DojoCard/Instructor3Dojo";
import DojoSchedules from "./DojoSchedules";
import DojoContact from "./DojoContact";
import DojoAdress from "./DojoAdress";

export default function DojoClub(props) {
    const { id } = useParams();
    const dojoClub = DojoData.findIndex((obj) => obj.id === id);
    const instructorTwo = DojoData[dojoClub].instructeurs.instructeur2;
    const instructorThree = DojoData[dojoClub].instructeurs.instructeur3;

    return (
        <main>
            <h1>{DojoData[dojoClub].club}</h1>

            <div>
                {" "}
                <Carrousel />
            </div>

            <div className="galleryInstructorDojo">
                <div>
                    <ChiefInstructorCard
                        className="galleryInstructorDojoCard"
                        chiefInstructeurPic={DojoData[dojoClub].chiefInstructeurPic}
                        chiefInstructeurRank={DojoData[dojoClub].chiefInstructeurRank}
                        ChiefInstructeurPosition={DojoData[dojoClub].ChiefInstructeurPosition}
                        chiefInstructeurName={DojoData[dojoClub].chiefInstructeurName}
                        key={id + DojoData[dojoClub].chiefInstructeurName}
                    />
                </div>{" "}
                <div>
                    <InstructorCard
                        className="galleryInstructorDojoCard"
                        instructeurPic={DojoData[dojoClub].instructeurs.instructeur.instructeurPic}
                        instructeurName={
                            DojoData[dojoClub].instructeurs.instructeur.instructeurName
                        }
                        instructeurRank={
                            DojoData[dojoClub].instructeurs.instructeur.instructeurRank
                        }
                        instructeurPosition={
                            DojoData[dojoClub].instructeurs.instructeur.instructeurPosition
                        }
                        key={id + DojoData[dojoClub].instructeurs.instructeur.instructeurName}
                    />
                </div>
                <div>
                    {instructorTwo && (
                        <InstructorCard
                            className="galleryInstructorDojoCard"
                            instructeurPic={
                                DojoData[dojoClub].instructeurs.instructeur2.instructeurPic
                            }
                            instructeurName={
                                DojoData[dojoClub].instructeurs.instructeur2.instructeurName
                            }
                            instructeurRank={
                                DojoData[dojoClub].instructeurs.instructeur2.instructeurRank
                            }
                            instructeurPosition={
                                DojoData[dojoClub].instructeurs.instructeur2.instructeurPosition
                            }
                            key={id + DojoData[dojoClub].instructeurs.instructeur2.instructeurName}
                        />
                    )}
                </div>
                <div>
                    {instructorThree && (
                        <InstructorCard
                            className="galleryInstructorDojoCard"
                            instructeurPic={
                                DojoData[dojoClub].instructeurs.instructeur3.instructeurPic
                            }
                            instructeurName={
                                DojoData[dojoClub].instructeurs.instructeur3.instructeurName
                            }
                            instructeurRank={
                                DojoData[dojoClub].instructeurs.instructeur3.instructeurRank
                            }
                            instructeurPosition={
                                DojoData[dojoClub].instructeurs.instructeur3.instructeurPosition
                            }
                            key={id + DojoData[dojoClub].instructeurs.instructeur3.instructeurName}
                        />
                    )}
                </div>
            </div>

            <div className="dojoShedules">
                {" "}
                <h2>Horaires</h2>
                <DojoSchedules
                    scheduleMonday={DojoData[dojoClub].scheduleMonday.map((item) => (
                        <li key={item + 1 + id + item.toString()}>{item}</li>
                    ))}
                    scheduleTuesday={DojoData[dojoClub].scheduleTuesday.map((item) => (
                        <li key={item + 2 + id + item.toString()}>{item}</li>
                    ))}
                    scheduleWednesday={DojoData[dojoClub].scheduleWednesday.map((item) => (
                        <li key={item + 3 + id + item.toString()}>{item}</li>
                    ))}
                    scheduleThursday={DojoData[dojoClub].scheduleThursday.map((item) => (
                        <li key={item + 4 + id + item.toString()}>{item}</li>
                    ))}
                    scheduleFriday={DojoData[dojoClub].scheduleFriday.map((item) => (
                        <li key={item + 5 + id + item.toString()}>{item}</li>
                    ))}
                    scheduleSaturday={DojoData[dojoClub].scheduleSaturday.map((item) => (
                        <li key={item + 6 + id + item.toString()}>{item}</li>
                    ))}
                    scheduleSunday={DojoData[dojoClub].scheduleSunday.map((item) => (
                        <li key={item + 7 + id + item.toString()}>{item}</li>
                    ))}
                />
            </div>
            <h2>Contact</h2>

            <div className="dojoContact">
                <DojoContact
                    contactMail={DojoData[dojoClub].contactMail.map((item) => (
                        <li key={item + 1 + id + item.toString()}>{item}</li>
                    ))}
                    phone={DojoData[dojoClub].phone.map((item) => (
                        <li key={item + 1 + id + item.toString()}>{item}</li>
                    ))}
                    website={DojoData[dojoClub].website.map((item) => (
                        <li key={item + 1 + id + item.toString()}>{item}</li>
                    ))}
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
            <div></div>
        </main>
    );
}

/*
  

*/
