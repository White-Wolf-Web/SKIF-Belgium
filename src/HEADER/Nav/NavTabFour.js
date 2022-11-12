import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

export default function NavTabFour() {
    return (
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>Administration</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Documents</Dropdown.Item>
            <Dropdown.Item>Axa</Dropdown.Item>
          
          </Dropdown.Menu>
        </Dropdown>
      );
}
