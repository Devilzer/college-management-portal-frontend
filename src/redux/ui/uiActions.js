

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