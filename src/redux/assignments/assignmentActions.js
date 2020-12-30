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
export const getAllAssignments = ()=> async(dispatch)=>{
    try {
        const {data} = await axios.get("/assignment/getall");
        console.log(data);
        dispatch({type : "SET_ALL_ASSIGNMENT",payload : data.assignments});
    } catch (error) {
        console.log(error);
    }
};

export const createSubmission = (value)=> async(dispatch)=>{
    try {
        const {data} = await axios.post("/assignment/submit",value);
        console.log(data);
        dispatch({type : "CREATE_SUBMISSION"});
    } catch (error) {
        console.log(error);
    }
}