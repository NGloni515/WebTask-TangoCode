import { GET_CARS } from './cars.types';

export const getCars = () => {
    // call api get cars
    return {
        type: GET_CARS,
        payload: [{name: 'FORD FOCUS', year: '2012'}, {name: 'OTHER CAR', year: '2015'}]
    };
};