const userState = {
    userType : "",
    name : "",
    email : "",
    password:""
};

const reducer = (state = userState, action)=>{
    switch (action.type) {
        case "CREATE_USER":
            return state;
        case "SET_USER":
            const newState = {
                userType : action.payload.userType,
                name : action.payload.name,
                email : action.payload.email,
                password:action.payload.email
            };
            console.log(newState);
            return newState;
        case  "REMOVE_USER":
            const defaultState = {
                userType : "",
                name : "",
                email : "",
                password:""
            };
            return defaultState;
    
        default:
            return state;
    }
};

export default reducer;