const initialState = {
    loggedIn : false,
    user : "",
    mainMenu:"dashboard",
    dashMenu:"assignment",
    assignment:""
};

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case "SET_USER":
            return{
                ...state,
                user : action.payload
            };
        case "SET_LOGGEDIN":
            return{
                ...state,
                loggedIn : true
            };
        case "SET_MAINMENU":
            return{
                ...state,
                mainMenu:action.payload
            };
        case "SET_DASHMENU":
            return{
                ...state,
                dashMenu:action.payload
            };
        default:
            return state;
    }
};

export default reducer;