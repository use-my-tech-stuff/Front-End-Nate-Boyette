

import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL
} from "../actions";

const initialState = {
  users: [],
  userStatus: {
    isFetchingUsers: false,
    usersFetched: false,
    isLoggedIn: false
  },
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        userStatus: {
          ...state.userStatus,
          isFetchingUsers: true
        }
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        userStatus: {
          ...state.userStatus,
          isFetchingUsers: false,
          usersFetched: true
        }
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        userStatus: {
          ...state.userStatus,
          isFetchingUsers: true,
          usersFetched: false
        },
        error: action.payload
      };
    case ADD_USER_START:
      return {};
    case ADD_USER_SUCCESS:
      return {};
    case ADD_USER_FAIL:
      return {};
    default:
      return state;
  }
};

export default userReducer;
