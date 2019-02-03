import itemReducer from "./itemReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux"

const rootReducer = combineReducers({itemReducer, userReducer})

export default rootReducer