import React from 'react';
import logo from '../../images/logo.svg'

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='logo' style={{height: "80px"}}/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/caringGuide' >
            Caring Guide
          </NavLink>
          <NavLink to='/geneCalculator' >
            Gene Calculator
          </NavLink>
          <NavLink to='/contact-us' >
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/donation'>Donation</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;