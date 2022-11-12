import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrousel.css";
import DojoData from "../DATAS/DojoData";
import { useParams } from "react-router-dom";

export default function Carrousel() {
    const { id } = useParams();
    const dojoClub = DojoData.findIndex((obj) => obj.id === id);

    return (
        <div>
            <Carousel className="dojoClubCarrousel">
           
                <Carousel.Item>
                    <img
                        className="d-block w-100 carrouselImg"
                        src={DojoData[dojoClub].pictures[0]}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carrouselImg"
                        src={DojoData[dojoClub].pictures[1]}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carrouselImg"
                        src={DojoData[dojoClub].pictures[2]}
                        alt="Third slide"
                    />
                </Carousel.Item>
             
              </Carousel>
        </div>
    );
}
