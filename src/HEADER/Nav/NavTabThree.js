import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';


export default function NavTabThree() {
    return (
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>SKIF-B</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Calendrier</Dropdown.Item>
            <Dropdown.Item>Conseil d'administration</Dropdown.Item>
            <Dropdown.Item>Réglement d'Arbitrage </Dropdown.Item>
            <Dropdown.Item>Arbitres</Dropdown.Item>
            <Dropdown.Item>Dojos</Dropdown.Item>
            <Dropdown.Item>YŪDANSHA KAI</Dropdown.Item>
           
          </Dropdown.Menu>
        </Dropdown>
      );
}
