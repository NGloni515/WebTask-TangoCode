import { GET_CARS } from './cars.types';

const INITIAL_STATE = {
  currentCars: [],
};
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CARS:
           return {
             ...state, 
             currentCars: action.payload,
           };
         default: return state;
    }
};
export default reducer;