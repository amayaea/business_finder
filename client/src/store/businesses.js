import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_BUSINESSES = "SET_BUSINESSES";

/**
 * INITIAL STATE
 */
const initialState = [];

/**
 * ACTION CREATORS
 */
const setBusinesses = (businesses) => ({
  type: SET_BUSINESSES,
  businesses,
});

/**
 * THUNK CREATORS
 */
export const getBusinesses = (bestRated) => async (dispatch) => {
  try {
    let businesses = null;
    if (bestRated) businesses = await axios.get("/api/businesses/best-rated");
    else businesses = await axios.get("/api/businesses");
    dispatch(setBusinesses(businesses.data));
  } catch (err) {
    console.error(err);
  }
};

export const searchBusinesses = (search, col) => async (dispatch) => {
  try {
    const businesses = await axios.get(`/api/businesses/${col}/${search}`);
    dispatch(setBusinesses(businesses.data));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_BUSINESSES:
      return action.businesses;
    default:
      return state;
  }
}
