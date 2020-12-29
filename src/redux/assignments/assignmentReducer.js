const initialState =  {
    assignments : [],
    submittedAssignments : []
};

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case "CREATE_ASSIGNMENT":
            return state;
    
        default:
            return state;
    }
};

export default reducer;