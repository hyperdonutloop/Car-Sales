import { ADD_FEATURE } from './actions';
import { REMOVE_FEATURE } from './actions';

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export function reducer(state = initialState, action) {
  switch(action.type){
    case ADD_FEATURE: {
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
          price: state.car.price + action.payload.price
        }
      }
    }
    case REMOVE_FEATURE: {
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter( feature => {
            return feature.id !== action.payload.id
          }),
          price: state.car.price - action.payload.price
        }
      }
    }
    default: 
      return state
  }
}

//line 18- setting a default value for the parameter
//every other time reducer runs it is going to be a different - an updated state

/* 
1. Set up reducer and initial state
2. Set up Store and Provider -> see index.js line 12
3. Wrapped App in PROVIDER and gave provider a prop of STORE



*/