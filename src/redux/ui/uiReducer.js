const initialState = {
    mainMenu:"dashboard",
    dashMenu:"assignment",
    editable :false
};

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        
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
        case "SET_EDIT" :
            return{
                ...state,
                editable : true
            }
        default:
            return state;
    }
};

export default reducer;