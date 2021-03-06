import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  FETCH_USERBYID_START,
  FETCH_USERBYID_SUCCESS,
  FETCH_USERBYID_FAIL,
  FETCH_ITEMSBYUSERID_START,
  FETCH_ITEMSBYUSERID_SUCCESS,
  FETCH_ITEMSBYUSERID_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_START,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from "../actions";

const initialState = {
  users: [],
  user: {},
  items: [],
  userStatus: {
    isFetchingUsers: false,
    usersFetched: false,
    isLoggingIn: false,
    isLoggedIn: false,
    loginFailed: false,
    isFetchingItems: false,
    itemsFetched: false,
    isRegisteringUser: false,
    isRegistered: false
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
    case FETCH_USERBYID_START:
      return {
        ...state,
        userStatus: {
          ...state.userStatus,
          isFetchingUsers: true,
          usersFetched: false
        },
        error: null
      };
    case FETCH_USERBYID_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userStatus: {
          ...state.userStatus,
          isFetchingUsers: false,
          usersFetched: true
        },
        error: null
      };
    case FETCH_USERBYID_FAIL:
      return {
        ...state,
        userStatus: {
          ...state.userStatus,
          isFetchingUsers: true,
          usersFetched: false
        },
        error: action.payload
      };
    case FETCH_ITEMSBYUSERID_START:
      return {
        ...state,
        userStatus: {
          ...state.userStatus,
          isFetchingItems: true,
          itemsFetched: false
        },
        error: null
      };
    case FETCH_ITEMSBYUSERID_SUCCESS:
      return {
        ...state,
        items: action.payload,
        userStatus: {
          ...state.userStatus,
          isFetchingItems: false,
          itemsFetched: true
        }
      };
    case FETCH_ITEMSBYUSERID_FAIL:
      return {
        ...state,
        userStatus: {
          ...state.userStatus,
          isFetchingItems: true,
          itemsFetched: false
        },
        error: action.payload
      };
    case LOGIN_USER_START:
      return {
        ...state,
        userStatus: {
          ...state.userStatus,
          isLoggingIn: true,
          isLoggedIn: false,
          loginFailed: false
        }
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userStatus: {
          ...state.userStatus,
          isLoggedIn: true,
          isLoggingIn: false,
          loginFailed: false
        }
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        userStatus: {
          ...state.userStatus,
          isLoggingIn: true,
          isLoggedIn: false,
          loginFailed: true
        },
        error: action.payload
      };
    case LOGOUT_USER:
      return {
        state: initialState,
        userStatus: {
          ...state.userStatus,
          isLoggedIn: false
        }
      };
    case REGISTER_USER_START:
      return {
        ...state,
        userStatus: {
          ...state.userStatus,
          isRegisteringUser: true
        }
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        userStatus: {
          ...state.userStatus,
          isRegisteringUser: false,
          isRegistered: true,
          isLoggedIn: true
        }
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        userStatus: {
          ...state.userStatus,
          isRegisteringUser: true,
          isRegistered: false,
          isLoggedIn: false
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
