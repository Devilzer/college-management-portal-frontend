import React,{useState} from 'react';
import { useSelector ,useDispatch } from "react-redux";
import { submitMarks } from "../redux/assignments/assignmentActions";
function SubmissionView() {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    const [value,setValue] = useState("");
    const handleClick = () =>{
        var markValue = {
            id : state.ui.currentAssignment._id,
            marks : value,
            name : state.user.name
        };
        dispatch(submitMarks(markValue));
        console.log(markValue);
        return;
    }
    return (
        <div className="submission-view">
            <h2 className="title">
             {state.ui.currentAssignment.title}
            </h2>
            <object aria-label={state.ui.currentAssignment.title} data={state.ui.currentAssignment.pdf}></object>
            <div className="mark-feild">
                <input type="text" value={value} onChange={e=>setValue(e.target.value)}/>
                <button onClick={handleClick}>Submit Marks</button>
            </div>
        </div>
    )
}

export default SubmissionView;
