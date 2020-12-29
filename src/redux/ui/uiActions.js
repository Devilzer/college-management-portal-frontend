

export const setMainMenu = (text)=>{
    return {
        type :"SET_MAINMENU",
        payload: text
    };
};

export const setDashMenu = (text)=>{
    return{
        type:"SET_DASHMENU",
        payload:text
    };
};
export const setEdit = ()=>{
    return{
        type: "SET_EDIT"
    };
};