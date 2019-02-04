import axios from "axios";

export const FETCH_ITEMS_START = "FETCH_ITEMS_START";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAIL = "FETCH_ITEMS_FAIL";

export const ADD_ITEM_START = "ADD_ITEM_START";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAIL = "ADD_ITEM_FAIL";

export const DELETE_ITEM_START = "DELETE_ITEM_START";
export const DELETE_ITEM_SUCCESS = `DELETE_ITEM_SUCCESS`;
export const DELETE_ITEM_FAIL = `DELETE_ITEM_FAIL`;

export const UPDATE_ITEM_START = "UPDATE_ITEM_START";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const UPDATE_ITEM_FAIL = "UPDATE_ITEM_FAIL";

export const CANCEL_ITEM_FORM = "CANCEL_ITEM_FORM";

const baseUrl = `URL GOES HERE`;

// Fetch Item Action
export const getItems = () => dispatch => {
  dispatch({ type: FETCH_ITEMS_START });
  // axios
  //   .get(`${baseUrl}/api/items`)
  //   .then(res => dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data }))
  //   .catch(err => dispatch({ type: FETCH_ITEMS_FAIL, payload: err }));

  dispatch({type: FETCH_ITEMS_SUCCESS})

};

// Add Item Action
export const addItem = item => dispatch => {
  axios
    .post(`${baseUrl}/api/items`, item)
    .then(res => dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data }));
};

// Delete Item Action
export const deleteItem = id => dispatch => {
  dispatch({ type: DELETE_ITEM_START });
  axios
    .delete(`${baseUrl}/api/items/${id}`)
    .then(res => dispatch({ type: DELETE_ITEM_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_ITEM_FAIL, payload: err }));
};

// Update Item Action
export const updateItem = (itemId, item) => dispatch => {
  dispatch({ type: UPDATE_ITEM_START });
  axios
    .post(`${baseUrl}/api/items/${itemId}`, item)
    .then(res => dispatch({ type: UPDATE_ITEM_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_ITEM_FAIL, payload: err }));
};

// Cancel Form Action...Will push back to item page
export const cancelItemForm = () => dispatch => {
  dispatch({ type: CANCEL_ITEM_FORM });
};
