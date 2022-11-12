import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "./Navigation.css"
import NavTabTwo from './NavTabTwo'
import NavTabThree from './NavTabThree'
import NavTabFour from './NavTabFour';



export default function Navigation() {
    return (
        <Nav  defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/">Acceuil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavTabTwo eventKey="link-2" />  
          </Nav.Item>
          <Nav.Item>
            <NavTabThree eventKey="link-3" />
          </Nav.Item>
          <Nav.Item>
            <NavTabFour eventKey="link3" />
            
          </Nav.Item>
        </Nav>
      );
}


