import React from 'react'
import "./Footer.css"
import LogoSkifWorld from "../ASSETS/IMAGES/logo/logoSkif.webp";
import BroderieSkif from "../ASSETS/IMAGES/Broderie/skifBroderie.png";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer">
				<div className="container">
                    <ul className="footer__liens">
                        <li><a><i className="fa-solid fa-certificate"></i>  Devenir Membre SKIF</a></li>
                        <li><Link to="/calendar"><i className="fa-solid fa-calendar-days"></i>&nbsp;Calendrier</Link></li>
                        <li><a><i className="fa-solid fa-person"></i>  Espace Membre</a></li>
                        <li><a><i className="fa-solid fa-envelope"></i>  Contact</a></li>
                        <li><Link to="/dojoslist"><i className="fa-solid fa-dungeon"></i>&nbsp;Dojos</Link></li>
                        <li><a><i className="fa-solid fa-camera"></i>  Photo</a></li>
                        <li><a><i className="fa-solid fa-file"></i> Conditions Générales</a></li>
                    </ul>
                    <div className="broderieSociale">
                    <img src={BroderieSkif} alt="Broderie que l'on retrouve sur les kimonos de karaté skif" className="skifBroderie" /> 
					<ul className="icons">
						<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
						<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
						<li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
					</ul>
                </div>
                <div className="logoSkifWorld"><img src={LogoSkifWorld} alt="logo Skif world basé au Japon" /></div>
                </div>
			</footer>
  )
}

