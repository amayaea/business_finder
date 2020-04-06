import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_BUSINESS = "SET_BUSINESS";
// const SORT_ALBUMS = 'SORT_ALBUMS'

/**
 * INITIAL STATE
 */
const initialState = [];

/**
 * ACTION CREATORS
 */
const setBusiness = (business) => ({
  type: SET_BUSINESS,
  business,
});

// export const sortAlbums = (sortKey) => ({
//   type: SORT_ALBUMS,
//   sortKey,
// });

/**
 * THUNK CREATORS
 */
export const getBusinesses = () => async (dispatch) => {
  try {
    // TODO
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
    // case SORT_ALBUMS:
    //   return _.sortBy(state, [action.sortKey]);
    default:
      return state;
  }
}
