import React,{useState} from 'react';
import { useDispatch , useSelector } from "react-redux";
import moment from "moment";
import { createAssignment } from "../redux/assignments/assignmentActions";

function AddAssignment() {
    const dispatch = useDispatch();
    const state = useSelector(state=>state);
    const [date,setDate] = useState(moment().format("YYYY-MM-DD"));
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const handleSubmit = ()=>{
        var value = {
            teacher : state.user.name,
            title : title,
            description : description,
            deadline : date
        };
        dispatch(createAssignment(value));
        setDate(moment().format("YYYY-MM-DD"));
        setTitle("");
        setDescription("");

    };
    return (
        <div className="add-assignments">
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
            <textarea className="discp" value ={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description..."></textarea>
            <div className="deadline">
            <h3>Deadline.</h3>
            <input type="date"  value={date} onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}>Add Assignment</button>
        </div>
    )
}

export default AddAssignment;
