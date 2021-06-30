import { GET_CURRENT_CAR, SET_MAIN_IMAGE } from './cars.types';
import axios from 'axios'

export const getCurrentCar = async () => {
    // call api get current car
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    };
    let response = await axios.get('http://localhost:3001/api/v1/cars/60dcabb69da4bd2194f49789', {}, options)
    return {
        type: GET_CURRENT_CAR,
        payload: {...response.data.car}
    };
};

export const setMainImage = (imageUrl) => {
    return {
        type: SET_MAIN_IMAGE,
        payload: imageUrl
    };
};