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
    CountNumber,
    ImageElement,
    PerformanceCard,
    PerformanceTitle,
    MainContainer
  } from './BodyElements';
  import {
    IoMail
  } from 'react-icons/io5';
  import '../../css/body.css';

const Navbar = () => {

    return(
        <div className="grid-container">
            <MainContainer>
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
            </MainContainer>
            <Container className="margin-t4 grid-image-container">
                <ImageElement className="grid-image-item" src="https://www.megautos.com/wp-content/uploads/2018/04/Ford-Focus-2018-titanium-interior-1024x768.jpg" />
                <ImageElement className="grid-image-item" src="https://noticias.coches.com/wp-content/uploads/2014/02/Ford-Focus-2014-interior-04-650x419.jpg" />
                <ImageElement className="grid-image-item" src="https://i.blogs.es/367759/presentacion-ford-focus-20/450_1000.jpg" />
                <ImageElement className="grid-image-item" src="https://carnovo-wordpress-media.s3.eu-west-1.amazonaws.com/wp-content/uploads/2018/04/10151522/focus-2.jpg" />
                <ImageElement className="grid-image-item" src="https://i0.wp.com/geeksroom.com/wp-content/uploads/2018/04/ford-focus-00.jpg?resize=680%2C384&ssl=1" />
                <ImageElement className="grid-image-item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-w7l7FSKQ3RWVjG3B2_5xjqkO70N5E2zFCg&usqp=CAU" />
            </Container>
            <Container className="grid-performance-container">
                <PerformanceCard >
                    <PerformanceTitle>EXTRIOR</PerformanceTitle>
                    <Container className="grid-table">
                         <text className="grid-table-element-right">Cylinders</text> <text className="grid-table-element-left">L4</text>
                         <text className="grid-table-element-right">City MPG</text> <text className="grid-table-element-left">20 MPG</text>
                         <text className="grid-table-element-right">Highway MPG</text> <text className="grid-table-element-left">20 MPG</text>
                         <text className="grid-table-element-right">Engine</text> <text className="grid-table-element-left">1.3</text>
                    </Container>
                </PerformanceCard>
                <PerformanceCard>
                    <PerformanceTitle>PERFORMANCE</PerformanceTitle>
                    <Container className="grid-table">
                        <text className="grid-table-element-right">Cylinders</text> <text className="grid-table-element-left">L4</text>
                        <text className="grid-table-element-right">City MPG</text> <text className="grid-table-element-left">20 MPG</text>
                        <text className="grid-table-element-right">Highway MPG</text> <text className="grid-table-element-left">20 MPG</text>
                        <text className="grid-table-element-right">Engine</text> <text className="grid-table-element-left">1.3</text>
                    </Container>
                </PerformanceCard>
            </Container>
        </div>
        
        
    )
}

export default Navbar