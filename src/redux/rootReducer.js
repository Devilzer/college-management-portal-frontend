import { combineReducers } from "redux";
import uiReducer from "./ui/uiReducer";
import userReducer  from "./user/userReducer";
import assignmentReducer from "./assignments/assignmentReducer";

const rootReducer = combineReducers({ 
    user :userReducer,
    ui : uiReducer,
    assignment : assignmentReducer
});

export default rootReducer;