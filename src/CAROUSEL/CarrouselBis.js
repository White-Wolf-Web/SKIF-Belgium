import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Carrousel.css";

export default function CarrouselBis() {
  return (
    <div className="moduleCarrousel">
    <Carousel className="dojoClubCarrousel">
      <Carousel.Item>
        <img
          className="d-block w-100 carrouselImg"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
          width={764}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="d-block w-100 carrouselImg"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
          width={764}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrouselImg"
          src="https://via.placeholder.com/800x400"
          alt="Third slide"
          width={764}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  );
}


