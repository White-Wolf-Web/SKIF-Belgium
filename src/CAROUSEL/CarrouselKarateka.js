import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "../KARATEKAS/Karatekas.css";
import karatekasData from '../DATAS/karatekasData';
import { useParams } from "react-router-dom";

export default function CarrouselKarateka() {
    const { id } = useParams();
    const karatekaId = karatekasData.findIndex((obj) => obj.id === id);
    const karateCarrouselPic = karatekasData[karatekaId].pictures;
    console.log(karateCarrouselPic.toString());
  return (
    <div className="karate-module-carrousel">
    <Carousel className="karate-carrousel">
        {karateCarrouselPic.map((item) => (
            <Carousel.Item>
                <img
                    width={764}
                    className="d-block w-100 carrouselImg"
                    src={item}
                    key={karateCarrouselPic + karatekaId + item}
                    alt="karateka en action"
                />
            </Carousel.Item>
        ))}
    </Carousel>
</div>
);
}

