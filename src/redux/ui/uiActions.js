export const setUser = (text)=>{
    return {
        type : "SET_USER",
        payload:text
    };
};
export const setLoggedin = ()=>{
    return {
        type :"SET_LOGGEDIN"
    };
};

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