const axios = require('axios').default;

export const createAssignment = (value)=> async(dispatch)=>{
    try {
        const {data} = await axios.post("/assignment/create",value);
        console.log(data);
        dispatch({type : "CREATE_ASSIGNMENT"});
    } catch (error) {
        console.log(error);
    }
};