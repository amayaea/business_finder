import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_BUSINESS = "SET_BUSINESS";
// const SORT_ALBUMS = 'SORT_ALBUMS'

/**
 * INITIAL STATE
 */
const initialState = {};

/**
 * ACTION CREATORS
 */
const setBusiness = (business) => ({
  type: SET_BUSINESS,
  business,
});

/**
 * THUNK CREATORS
 */
export const getBusiness = (businessId) => async (dispatch) => {
  try {
    const business = await axios.get(`/api/business/:${businessId}`);
    dispatch(setBusiness(business.data));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_BUSINESS:
      return action.business;
    default:
      return state;
  }
}
