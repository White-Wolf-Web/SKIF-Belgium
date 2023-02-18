import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Karatekas.css";
//import { useParams } from "react-router-dom";
//import karatekasData from "../DATAS/karatekasData";



export default function CarrouselKarateka() {
   
  return (
    <div className="senseiModuleCarrousel">
    <Carousel className="senseiCarrousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
