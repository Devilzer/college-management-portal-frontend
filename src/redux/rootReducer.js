import { combineReducers } from "redux";
import uiReducer from "./ui/uiReducer";
import userReducer  from "./user/userReducer";

const rootReducer = combineReducers({ 
    user :userReducer,
    ui : uiReducer,
});

export default rootReducer;