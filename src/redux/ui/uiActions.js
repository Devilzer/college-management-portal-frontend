

export const setMainMenu = (text)=>{
    return {
        type :"SET_MAINMENU",
        payload: text
    };
};

export const setTeacherMenu = (text)=>{
    return{
        type:"SET_TEACHER_MENU",
        payload:text
    };
};
export const setStudentMenu = (text)=>{
    return{
        type:"SET_STUDENT_MENU",
        payload:text
    };
};
export const setEdit = ()=>{
    return{
        type: "SET_EDIT"
    };
};
export const setEditDone = ()=>{
    return{
        type: "SET_EDIT_DONE"
    };
};

export const setCurrentAssignment = (assignment)=>{
    return{
        type : "SET_CUR_ASSIGNMENT",
        payload : assignment
    }
};
export const setAssignmentPage = ()=>{
    return{
        type:"SET_ASSIGNMENT_PAGE"
    };
};

export const resetAssignmentPage = ()=>{
    return{
        type:"RESET_ASSIGNMENT_PAGE"
    };
};