import { tempUsers } from "./tempData";

const initialState = {
  users: tempUsers,
  userStatus: {
    isFetchingUsers: false,
    userFetched: false,
    isLoggedIn: false,
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default userReducer