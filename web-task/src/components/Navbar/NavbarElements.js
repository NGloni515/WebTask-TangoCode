import { FaSearch, FaPhoneAlt } from 'react-icons/fa';
import { AiFillClockCircle } from 'react-icons/ai';
import { IoLocation } from 'react-icons/io5';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 56px;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
`;

export const IconBackground = styled.div`
    height: 56px;
    margin: 0 0 0 -25px;
    float:right;
    background-color: #f88200;
`;

export const IconContainer = styled.div`
  float: right;
  transform: skewX(-15deg);
  background-color: #f88200;
  padding: 24px 24px 16px 24px;
  border-style: none;
    border-left-style: inset;
    border-width: 0.5px;
    border-color: white;


`;

export const Search = styled(FaSearch)`
  float: right;
  color: #fff;
  margin: 24px 24px 16px 24px;
  font-size: 16px;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const LocationIcon = styled(IoLocation)`
  float: right;
  color: #fff;
  background-color: #f88200;
  font-size: 16px;
  transform: skewX(15deg);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const ClockIcon = styled(AiFillClockCircle)`
  float: right;
  color: #fff;
  // padding: 24px 24px 16px 24px;
  
  
  background-color: #f88200;
  font-size: 16px;
  transform: skewX(15deg);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  float: right;
  color: #fff;
  background-color: #f88200;
  // transform: skewX(-15deg);
  font-size: 16px;
  transform: skewX(15deg);
  transform: rotate(30deg);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  width: 100vw;
  white-space: nowrap; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;