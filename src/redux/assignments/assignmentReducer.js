const initialState =  {
    assignments : [],
    submittedAssignments : [],
    submissions : []
};

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case "CREATE_ASSIGNMENT":
            return state;
        case "SET_ALL_ASSIGNMENT":
            return{
                ...state,
                assignments : action.payload
            };
        case "CREATE_SUBMISSION":
            return state;
        case "SET_ALL_SUBMISSION":
            return{
                ...state,
                submissions : action.payload
            }
        default: 
            return state;
    }
};

export default reducer;