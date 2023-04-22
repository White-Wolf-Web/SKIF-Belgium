import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrousel.css";
import DojoData from "../DATAS/DojoData";
import { useParams } from "react-router-dom";

export default function Carrousel() {
  const { id } = useParams();
  const dojoClub = DojoData.findIndex((obj) => obj.id === id);
  const carrouselPic = DojoData[dojoClub].pictures;

  console.log(carrouselPic.toString());
  return (
    <div className="moduleCarrousel">
      <Carousel className="dojoClubCarrousel">
        {carrouselPic.map((item, index) => (
          <Carousel.Item key={`carousel-item-${id}-${index}`}>
            <img
              width={764}
              className="d-block w-100 carrouselImg"
              src={item}
              alt="groupe de kateka"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
