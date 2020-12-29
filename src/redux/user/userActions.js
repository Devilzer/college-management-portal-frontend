const axios = require('axios').default;

export const createUser = (value) => async(dispatch)=>{
    try {
        const {data} = await axios.post("/user/signup",{
            userType : value.userType,
            name : value.name,
            email: value.email,
            password : value.password
        });
        console.log(data);
        dispatch({type : "CREATE_USER"});
    } catch (error) {
        console.log(error);
    }
};
export const loginUser = (value) => async(dispatch)=>{
    try {
        const{data}= await axios.post("/user/signin",{
            email : value.email,
            password : value.password
        });
        dispatch({type:"SET_USER",payload : data.user});
    } catch (error) {
        console.log(error);
    }
};
export const logoutUser = ()=>{
    return{
        type : "REMOVE_USER"
    };
};