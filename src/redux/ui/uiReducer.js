const initialState = {
    mainMenu:"dashboard",
    studentMenu:"assignments", //submittedAssignments
    teacherMenu:"submissions", //addAssignment
    editable :false
};

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        
        case "SET_MAINMENU":
            return{
                ...state,
                mainMenu:action.payload
            };
        case "SET_TEACHER_MENU":
            return{
                ...state,
                teacherMenu:action.payload
            };
        case "SET_STUDENT_MENU":
            return{
                ...state,
                studentMenu:action.payload
            };
        case "SET_EDIT" :
            return{
                ...state,
                editable : true
            }
        case "SET_EDIT_DONE" :
            return{
                ...state,
                editable : false
            }
        default:
            return state;
    }
};

export default reducer;