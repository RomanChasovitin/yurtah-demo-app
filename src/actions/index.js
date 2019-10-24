import { GET_LISTINGS_REQUEST, GET_LISTINGS_SUCCESS } from "./types";

import { GET_LISTINGS_URL } from "../api";

export const getListingRequest = () => ({
  type: GET_LISTINGS_REQUEST
});

export const getListingsSuccess = listings => ({
  type: GET_LISTINGS_SUCCESS,
  payload: listings
});

export function getListings(count) {
  return async function(dispatch) {
    dispatch(getListingRequest());

    let res = await fetch(`${GET_LISTINGS_URL}?size=${count}`);
    res = await res.json();

    dispatch(getListingsSuccess(res.results));
  };
}
