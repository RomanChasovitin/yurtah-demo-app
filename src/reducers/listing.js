import { GET_LISTINGS_REQUEST, GET_LISTINGS_SUCCESS } from "../actions/types";

const defaultState = {
  listings: [],
  isLoading: false,
  touched: false
};

export default function listingReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_LISTINGS_REQUEST:
      return {
        ...state,
        isLoading: true,
        touched: true
      };

    case GET_LISTINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listings: [...action.payload]
      };
    default:
      return state;
  }
}
