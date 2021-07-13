import { FETCH_CARS } from "../constants/actionType";

const initState = {
  cars: [],
};

const CarReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return {
        ...state,
        cars: action.payload.cars,
      };

    default:
      return state;
  }
};

export default CarReducer;
