const initialState = {
    mainMenu:"dashboard",
    studentMenu:"assignments", //submittedAssignments
    teacherMenu:"submissions", //addAssignment
    editable :false,
    currentAssignment: {},
    assignmentPage : false
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
        case "SET_CUR_ASSIGNMENT" :
            return{
                ...state,
                currentAssignment:action.payload
            };
        case "SET_ASSIGNMENT_PAGE":
            return {
                ...state,
                assignmentPage : true
            };
        case "RESET_ASSIGNMENT_PAGE" :
            return{
                ...state,
                assignmentPage : false
            }
        default:
            return state;
    }
};

export default reducer;