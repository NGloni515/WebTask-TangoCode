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
    MainContainer,
    MobileButton,
    MobileFooter,
    MobileFooterTitle,
    MobileFooterDescription,
    ImageSlider
  } from './BodyElements';
  import {
    IoMail
  } from 'react-icons/io5';
  import '../../css/body.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Navbar = () => {

    return(
        <div className="grid-container">
            <div className="desktop-hide">
                <Carousel className="carousel-style" showArrows={false} showStatus={false} showThumbs={false} >
                    <div className="slider-item-div">
                        <img src="https://i.pinimg.com/originals/c6/97/15/c697157b77bca2e6d8449ad917b61924.jpg" />
                    </div>
                    <div className="slider-item-div">
                        <img src="https://i.pinimg.com/originals/c6/97/15/c697157b77bca2e6d8449ad917b61924.jpg" />
                    </div>
                    <div className="slider-item-div">
                        <img src="https://i.pinimg.com/originals/c6/97/15/c697157b77bca2e6d8449ad917b61924.jpg" />
                    </div>
                </Carousel>
            </div>
            <MainContainer >
                <MainImage  className="mobile-hide" src="https://i.pinimg.com/originals/c6/97/15/c697157b77bca2e6d8449ad917b61924.jpg" />
                {/* <ImageSlider  >
                    <Container className="mySlides fade">
                        <img src="https://i.pinimg.com/originals/c6/97/15/c697157b77bca2e6d8449ad917b61924.jpg" />
                    </Container>
                </ImageSlider> */}
                
                <CarGeneralData className="mobile-general">
                    <CarContainer className="car-container-mobile">
                        <ContainerTitle> Ford Focus </ContainerTitle>
                        <Container className="car-container-grid">
                            <ParamsContainer className="car-container-col1">
                                <ContainerParam>Year</ContainerParam>
                                <ContainerImportantData>2012</ContainerImportantData>
                                <ContainerParam>Price Range</ContainerParam>
                                <ContainerImportantData>$8500 - $9000</ContainerImportantData>
                                <ContainerParam>Mileage</ContainerParam>
                                <ContainerImportantData>200,000 miles</ContainerImportantData>
                            </ParamsContainer>
                            <Container className="car-container-col2">
                                <ContainerParam>Item Number: #1395P</ContainerParam>
                                <ContainerParam>VIN: 3GNDA13D96S631406</ContainerParam>
                                <ContainerShare>Share this car <IoMail className="icon-text" /> </ContainerShare>
                            </Container>
                            <Container className="align-center car-container-col3">
                                <Container>
                                    <ContainerParam className="no-margin">Views</ContainerParam>
                                    <CountNumber className="views">37</CountNumber>
                                </Container>
                                <Container>
                                    <ContainerParam className="no-margin mobile-hide">Saves</ContainerParam>
                                    <CountNumber className="mobile-hide">20</CountNumber>
                                </Container>
                                <Container>
                                    <ContainerParam className="no-margin mobile-hide">Shares</ContainerParam>
                                    <CountNumber className="mobile-hide">15</CountNumber>
                                </Container>
                            </Container>
                        </Container>
                        
                    </CarContainer>
                </CarGeneralData>
            </MainContainer>
            <Container className="margin-t4 grid-image-container mobile-hide">
                <ImageElement className="grid-image-item" src="https://i.pinimg.com/originals/c6/97/15/c697157b77bca2e6d8449ad917b61924.jpg" />
                <ImageElement className="grid-image-item" src="https://noticias.coches.com/wp-content/uploads/2014/02/Ford-Focus-2014-interior-04-650x419.jpg" />
                <ImageElement className="grid-image-item" src="https://i.blogs.es/367759/presentacion-ford-focus-20/450_1000.jpg" />
                <ImageElement className="grid-image-item" src="https://carnovo-wordpress-media.s3.eu-west-1.amazonaws.com/wp-content/uploads/2018/04/10151522/focus-2.jpg" />
                <ImageElement className="grid-image-item" src="https://i0.wp.com/geeksroom.com/wp-content/uploads/2018/04/ford-focus-00.jpg?resize=680%2C384&ssl=1" />
                <ImageElement className="grid-image-item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-w7l7FSKQ3RWVjG3B2_5xjqkO70N5E2zFCg&usqp=CAU" />
            </Container>
            <MobileButton className="desktop-hide">
                CALL US
            </MobileButton>
            <Container className="grid-performance-container">
                <PerformanceCard className="performance-card-responsive">
                    <PerformanceTitle>EXTRIOR</PerformanceTitle>
                    <Container className="grid-table">
                         <text className="grid-table-element-right">Cylinders</text> <text className="grid-table-element-left">L4</text>
                         <text className="grid-table-element-right">City MPG</text> <text className="grid-table-element-left">20 MPG</text>
                         <text className="grid-table-element-right">Highway MPG</text> <text className="grid-table-element-left">20 MPG</text>
                         <text className="grid-table-element-right">Engine</text> <text className="grid-table-element-left">1.3</text>
                    </Container>
                </PerformanceCard>
                <PerformanceCard className="performance-card-responsive">
                    <PerformanceTitle>PERFORMANCE</PerformanceTitle>
                    <Container className="grid-table">
                        <text className="grid-table-element-right">Cylinders</text> <text className="grid-table-element-left">L4</text>
                        <text className="grid-table-element-right">City MPG</text> <text className="grid-table-element-left">20 MPG</text>
                        <text className="grid-table-element-right">Highway MPG</text> <text className="grid-table-element-left">20 MPG</text>
                        <text className="grid-table-element-right">Engine</text> <text className="grid-table-element-left">1.3</text>
                    </Container>
                </PerformanceCard>
            </Container>
            <MobileFooter className="desktop-hide">
                <MobileFooterTitle>
                    About Us / Terms / Privacy Policy
                </MobileFooterTitle>
                <MobileFooterDescription>
                    PLS is a registered service mark and other marks are service marks of PLS Financial Services, Inc 2016
                </MobileFooterDescription>
            </MobileFooter>
        </div>
        
        
    )
}

export default Navbar