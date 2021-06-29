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

const Navbar = () => {

    return(
        <Nav className="navbar">
            <IconBackground/>
                <IconContainer>
                    <ClockIcon/>
                </IconContainer>
            
                <IconContainer>
                    <PhoneIcon/>
                </IconContainer>
                <IconContainer>
                    <LocationIcon/>
                </IconContainer>
                
            
            <Search/>
            
        </Nav>
    )
}

export default Navbar