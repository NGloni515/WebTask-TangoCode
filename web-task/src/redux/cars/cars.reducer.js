import { GET_CURRENT_CAR,SET_MAIN_IMAGE } from './cars.types';

const INITIAL_STATE = {
  currentCar: {},
  mainImage: ""
};
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CURRENT_CAR:
          return {
            ...state, 
            currentCar: action.payload,
            mainImage: action.payload.imagesUrls[0]
          };
        case SET_MAIN_IMAGE:
          return {
            ...state, 
            mainImage: action.payload,
          };
         default: return state;
    }
};
export default reducer;