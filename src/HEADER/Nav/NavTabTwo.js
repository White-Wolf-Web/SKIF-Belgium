import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

export default function NavTabTwo() {

    return (
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>SKIF</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Histoire</Dropdown.Item>
            <Dropdown.Item>Concept du karaté</Dropdown.Item>
            <Dropdown.Item>Kanazawa Soké</Dropdown.Item>
            <Dropdown.Item>Kanazawa Kancho</Dropdown.Item>
            <Dropdown.Item>Murakami Manabu</Dropdown.Item>
            <Dropdown.Item>SKIEF</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
}
