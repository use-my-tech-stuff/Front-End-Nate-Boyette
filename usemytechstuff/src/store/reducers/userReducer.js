import { tempUsers } from "./tempData";

const initialState = {
  users: tempUsers
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export default userReducer