import { tempItems } from "./tempData";

const initialState = {
  items: tempItems
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default itemReducer;
