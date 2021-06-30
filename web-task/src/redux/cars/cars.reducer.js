import { GET_CURRENT_CAR } from './cars.types';

const INITIAL_STATE = {
  currentCar: {},
};
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CURRENT_CAR:
           return {
             ...state, 
             currentCar: action.payload,
           };
         default: return state;
    }
};
export default reducer;