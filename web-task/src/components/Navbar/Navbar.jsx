import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa'
import {
    Nav,
    Search,
    LocationIcon,
    ClockIcon,
    PhoneIcon,
    IconContainer,
    IconBackground,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
  import '../../css/navbar.css';

const Navbar = () => {

    return(
        <Nav>
            <IconBackground className="icon-background-mobile"/>
            <IconContainer className="icon-mobile-responsive">
                <ClockIcon />
            </IconContainer>
            <IconContainer>
                <PhoneIcon/>
            </IconContainer>
            <IconContainer>
                <LocationIcon/>
            </IconContainer>
            <Search className="icon-mobile-responsive"/>
            
        </Nav>
    )
}

export default Navbar