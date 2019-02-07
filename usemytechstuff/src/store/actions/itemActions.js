import axios from "axios";

export const FETCH_ITEMS_START = "FETCH_ITEMS_START";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAIL = "FETCH_ITEMS_FAIL";

export const FETCH_ITEMBYID_START = "FETCH_ITEMBYID_START";
export const FETCH_ITEMBYID_SUCCESS = "FETCH_ITEMBYID_SUCCESS";
export const FETCH_ITEMBYID_FAIL = "FETCH_ITEMBYID_FAIL";

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

export const RENT_ITEM_START = 'RENT_ITEM_START';
export const RENT_ITEM_SUCCESS = 'RENT_ITEM_SUCCESS'
export const RENT_ITEM_FAIL = 'RENT_ITEM_FAIL'

const baseUrl = `https://use-my-tech-stuff.herokuapp.com`;

// Fetch Item Action
export const getItems = () => dispatch => {
  dispatch({ type: FETCH_ITEMS_START });
  axios
    .get(`${baseUrl}/api/items`)
    .then(res => dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_ITEMS_FAIL, payload: err }));

  // dispatch({type: FETCH_ITEMS_SUCCESS})
};

export const getItemById = itemId => dispatch => {
  dispatch({ type: FETCH_ITEMBYID_START });
  axios
    .get(`${baseUrl}/api/items/${itemId}`)
    .then(res => dispatch({ type: FETCH_ITEMBYID_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_ITEMBYID_FAIL, payload: err }));
};

// Add Item Action
export const addItem = item => dispatch => {
  const token = localStorage.getItem("jwt");
  const options = {
    headers: {
      authorization: token
    }
  };
dispatch({type: ADD_ITEM_START})
  console.log('itemToAdd', item)
  axios
    .post(`${baseUrl}/api/items`, item, options)
    .then(res => {
      
      console.log('addItem', res.data)  
      dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: ADD_ITEM_FAIL, payload: err }));
};


// Delete Item Action
export const deleteItem = id => dispatch => {
  const token = localStorage.getItem("jwt");
  const options = {
    headers: {
      authorization: token
    }
  };

  dispatch({ type: DELETE_ITEM_START });
  axios
    .delete(`${baseUrl}/api/items/${id}`, options)
    .then(res => {
      console.log(res)
      dispatch({ type: DELETE_ITEM_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: DELETE_ITEM_FAIL, payload: err }));

    
};

// Update Item Action
export const updateItem = (itemId, item) => dispatch => {

  const token = localStorage.getItem("jwt");
  const options = {
    headers: {
      authorization: token
    }
  };

  dispatch({ type: UPDATE_ITEM_START });
  
  axios
    .patch(`${baseUrl}/api/items/${itemId}`, item, options)
    .then(res => {
      console.log(res)
      axios
        .get(`${baseUrl}/api/items`)
        .then(res => dispatch({ type: UPDATE_ITEM_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_ITEMS_FAIL, payload: err }));
    
    })
    .catch(err => dispatch({ type: UPDATE_ITEM_FAIL, payload: err }));
};

// // Cancel Form Action...Will push back to item page
// export const cancelItemForm = () => dispatch => {
//   dispatch({ type: CANCEL_ITEM_FORM });
// };


export const rentItem = (itemId,item) => dispatch => {
  const token = localStorage.getItem("jwt");
  const options = {
    headers: {
      authorization: token
    }
  };

  dispatch({type: RENT_ITEM_START})
  axios
    .patch(`${baseUrl}/api/items/${itemId}`, item, options)
    .then(res => {
      console.log(res)
      axios
        .get(`${baseUrl}/api/items`)
        .then(res => {
          console.log('RENTAL ITEM', item)
          dispatch({ type: RENT_ITEM_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: RENT_ITEM_FAIL, payload: err }));

    })
    .catch(err => dispatch({ type: UPDATE_ITEM_FAIL, payload: err }));
}