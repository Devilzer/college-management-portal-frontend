import { combineReducers } from "redux";
import uiReducer from "./ui/uiReducer";

const rootReducer = combineReducers({
    ui : uiReducer
});

export default rootReducer;