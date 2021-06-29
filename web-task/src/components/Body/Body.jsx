import React, { useState } from 'react';
import {
    Container,
    MainImage,
    CarGeneralData,
    CarContainer,
    ContainerTitle,
    ContainerParam,
    ContainerImportantData,
    ParamsContainer,
    ContainerShare,
    CountNumber
  } from './BodyElements';
  import {
    IoMail
  } from 'react-icons/io5';
  import '../../css/body.css';

const Navbar = () => {

    return(
        <Container>
            <MainImage  src="https://i.pinimg.com/originals/c6/97/15/c697157b77bca2e6d8449ad917b61924.jpg" />
            <CarGeneralData>
                <CarContainer>
                    <ContainerTitle> Ford Focus </ContainerTitle>
                    <ParamsContainer>
                        <ContainerParam>Year</ContainerParam>
                        <ContainerImportantData>2012</ContainerImportantData>
                        <ContainerParam>Price Range</ContainerParam>
                        <ContainerImportantData>$8500 - $9000</ContainerImportantData>
                        <ContainerParam>Mileage</ContainerParam>
                        <ContainerImportantData>200,000 miles</ContainerImportantData>
                    </ParamsContainer>
                    <Container>
                        <ContainerParam>Item Number: #1395P</ContainerParam>
                        <ContainerParam>VIN: 3GNDA13D96S631406</ContainerParam>
                        <ContainerShare>Share this car <IoMail className="icon-text" /> </ContainerShare>
                    </Container>
                    <Container className="align-center">
                        <Container>
                            <ContainerParam className="no-margin">Views</ContainerParam>
                            <CountNumber>37</CountNumber>
                        </Container>
                        <Container>
                            <ContainerParam className="no-margin">Saves</ContainerParam>
                            <CountNumber>20</CountNumber>
                        </Container>
                        <Container>
                            <ContainerParam className="no-margin">Shares</ContainerParam>
                            <CountNumber>15</CountNumber>
                        </Container>
                        
                    </Container>
                </CarContainer>
            </CarGeneralData>
        </Container>
    )
}

export default Navbar