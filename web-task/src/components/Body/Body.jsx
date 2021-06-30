import React, { useState, useEffect } from 'react';
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
  } from './BodyElements';
  import {
    IoMail
  } from 'react-icons/io5';
  import '../../css/body.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import { connect } from 'react-redux';

import { getCurrentCar } from '../../redux/cars/cars.actions';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        currentCar: state.cars.currentCar,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentCar: () => dispatch(getCurrentCar())
    };
};


const Body = (props) => {

    useEffect(() => {
        props.getCurrentCar();
    }, []);
    console.log('PROPS',props)
    const {name, year, priceMin, priceMax, mileage, itemNumber, vin, views, saves, shares, extrior, performance, imagesUrls} = props.currentCar
    return(
        <div className="grid-container">
            <div className="desktop-hide">
                <Carousel className="carousel-style" showArrows={false} showStatus={false} showThumbs={false} >
                    {imagesUrls && imagesUrls.map((element, index) => 
                        <div key={index} className="slider-item-div">
                            <img src={element} alt={"car image "+ index}/>
                        </div>
                    )}
                </Carousel>
            </div>
            <MainContainer >
                <MainImage  className="mobile-hide" src="https://i.pinimg.com/originals/c6/97/15/c697157b77bca2e6d8449ad917b61924.jpg" />
                <CarGeneralData className="mobile-general">
                    <CarContainer className="car-container-mobile">
                        <ContainerTitle> {name} </ContainerTitle>
                        <Container className="car-container-grid">
                            <ParamsContainer className="car-container-col1">
                                <ContainerParam>Year</ContainerParam>
                                <ContainerImportantData>{year}</ContainerImportantData>
                                <ContainerParam>Price Range</ContainerParam>
                                <ContainerImportantData>${priceMin} - ${priceMax}</ContainerImportantData>
                                <ContainerParam>Mileage</ContainerParam>
                                <ContainerImportantData>{mileage} miles</ContainerImportantData>
                            </ParamsContainer>
                            <Container className="car-container-col2">
                                <ContainerParam>Item Number: {itemNumber}</ContainerParam>
                                <ContainerParam>VIN: {vin}</ContainerParam>
                                <ContainerShare>Share this car <IoMail className="icon-text" /> </ContainerShare>
                            </Container>
                            <Container className="align-center car-container-col3">
                                <Container>
                                    <ContainerParam className="no-margin">Views</ContainerParam>
                                    <CountNumber className="views">{views}</CountNumber>
                                </Container>
                                <Container>
                                    <ContainerParam className="no-margin mobile-hide">Saves</ContainerParam>
                                    <CountNumber className="mobile-hide">{saves}</CountNumber>
                                </Container>
                                <Container>
                                    <ContainerParam className="no-margin mobile-hide">Shares</ContainerParam>
                                    <CountNumber className="mobile-hide">{shares}</CountNumber>
                                </Container>
                            </Container>
                        </Container>
                        
                    </CarContainer>
                </CarGeneralData>
            </MainContainer>
            <Container className="margin-t4 grid-image-container mobile-hide">
                {imagesUrls && imagesUrls.map((element, index) => 
                    <ImageElement key={index} className="grid-image-item" src={element} alt={"car image "+ index} />
                )}
            </Container>
            <MobileButton className="desktop-hide">
                CALL US
            </MobileButton>
            <Container className="grid-performance-container">
                <PerformanceCard className="performance-card-responsive">
                    <PerformanceTitle>EXTRIOR</PerformanceTitle>
                    <Container className="grid-table">
                         <text className="grid-table-element-right">Cylinders</text> <text className="grid-table-element-left">{extrior && extrior.cylinders}</text>
                         <text className="grid-table-element-right">City MPG</text> <text className="grid-table-element-left">{extrior && extrior.cityMpg} MPG</text>
                         <text className="grid-table-element-right">Highway MPG</text> <text className="grid-table-element-left">{extrior && extrior.highwayMpg} MPG</text>
                         <text className="grid-table-element-right">Engine</text> <text className="grid-table-element-left">{extrior && extrior.engine}</text>
                    </Container>
                </PerformanceCard>
                <PerformanceCard className="performance-card-responsive">
                    <PerformanceTitle>PERFORMANCE</PerformanceTitle>
                    <Container className="grid-table">
                        <text className="grid-table-element-right">Cylinders</text> <text className="grid-table-element-left">{performance && performance.cylinders}</text>
                        <text className="grid-table-element-right">City MPG</text> <text className="grid-table-element-left">{performance && performance.cityMpg} MPG</text>
                        <text className="grid-table-element-right">Highway MPG</text> <text className="grid-table-element-left">{performance && performance.highwayMpg} MPG</text>
                        <text className="grid-table-element-right">Engine</text> <text className="grid-table-element-left">{performance && performance.engine}</text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Body);