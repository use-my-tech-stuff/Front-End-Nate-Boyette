import axios from "axios";

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export const FETCH_USERBYID_START = "FETCH_USERBYID_START";
export const FETCH_USERBYID_SUCCESS = "FETCH_USERBYID_SUCCESS";
export const FETCH_USERBYID_FAIL = "FETCH_USERBYID_FAIL";

export const FETCH_ITEMSBYUSERID_START = "FETCH_ITEMBYUSERID_START";
export const FETCH_ITEMSBYUSERID_SUCCESS = "FETCH_ITEMBYUSERID_SUCCESS";
export const FETCH_ITEMSBYUSERID_FAIL = "FETCH_ITEMBYUSERID_FAIL";

export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"

export const REGISTER_USER_START = "REGISTER_USER_START"; 
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAIL = "ADD_USER_FAIL";


// NEED USER LOGIN ACTIONS

// export const DELETE_USER_START = "DELETE_USER_START";
// export const DELETE_USER_SUCCESS = `DELETE_USER_SUCCESS`;
// export const DELETE_USER_FAIL = `DELETE_USER_FAIL`;

// export const UPDATE_USER_START = "UPDATE_USER_START";
// export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
// export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const CANCEL_ITEM_FORM = "CANCEL_ITEM_FORM";

const baseUrl = `https://use-my-tech-stuff.herokuapp.com`;

// Fetch Users Action
export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  axios
    .get(`${baseUrl}/api/users`)
    .then(res => dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_USERS_FAIL, payload: err }));

  
};

export const getUserById = userId => dispatch => {
  dispatch({type: FETCH_USERBYID_START})
  axios.get(`${baseUrl}/api/users/${userId}`)
  .then(res => dispatch({type: FETCH_USERBYID_SUCCESS, payload: res.data}))
  .catch(err => dispatch({type: FETCH_USERBYID_FAIL, payload: err}))
}

export const getItemsByUserId = userId => dispatch => {
  dispatch({type: FETCH_ITEMSBYUSERID_START})
  axios.get(`${baseUrl}/api/users/${userId}/items`)
  .then(res => dispatch({type: FETCH_ITEMSBYUSERID_SUCCESS, payload: res.data}))
  .catch(err => dispatch({type: FETCH_ITEMSBYUSERID_FAIL, payload: err}))
}

// Add User Action
export const addUser = user => dispatch => {
  axios
    .post(`${baseUrl}/api/users`, user)
    .then(res => dispatch({ type: ADD_USER_SUCCESS, payload: res.data }));
};


export const loginUser = user => dispatch => {
  
  axios.post(`${baseUrl}/api/auth/login`, user)
  .then(res => {
    localStorage.setItem('jwt', res.data.token)
    localStorage.setItem('userId', res.data.userId)
    dispatch({type: REGISTER_USER_SUCCESS})
  })
  .catch(err => console.log(err))
  // Need to handle user login here
}

export const logOut = () => dispatch => {
  // localStorage.removeItem('jwt')
  // localStorage.removeItem('userId')
  localStorage.clear();
  dispatch({ type: LOGOUT_USER})
}


export const registerUser = user => dispatch => {
  dispatch({type: REGISTER_USER_START})
  axios.post(`${baseUrl}/api/auth/register`, user)
    .then(res => {
      localStorage.setItem('jwt', res.data.token)
      localStorage.setItem('userId', res.data.userId)
      dispatch({ type: REGISTER_USER_SUCCESS })
    })
    .catch(err => dispatch({type: REGISTER_USER_FAIL, payload: err}))
}

// // Delete User Action
// export const deleteUser = userId => dispatch => {
//   dispatch({ type: DELETE_USER_START });
//   axios
//     .delete(`${baseUrl}/api/users/${id}`)
//     .then(res => dispatch({ type: DELETE_USER_SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: DELETE_USER_FAIL, payload: err }));
// };

// // Update User Action
// export const updateUser = (userId, item) => dispatch => {
//   dispatch({ type: UPDATE_USER_START });
//   axios
//     .post(`${baseUrl}/api/users/${userId}`, item)
//     .then(res => dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: UPDATE_USER_FAIL, payload: err }));
// };


