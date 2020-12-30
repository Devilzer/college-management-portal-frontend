import React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import FileBase64 from 'react-file-base64';
import { createSubmission } from "../redux/assignments/assignmentActions";
function SubmissionUpload() {
    const [file,setFile]=useState("");
    const state = useSelector(state=>state);
    const dispatch = useDispatch();

    const handleSubmit=()=>{
        var value ={
            teacher:state.ui.currentAssignment.teacher,
            student :state.user.name,
            pdf : file,
            title : state.ui.currentAssignment.title,
            description : state.ui.currentAssignment.description,
        };
        dispatch(createSubmission(value));
    }
    return (
        <div className="submission">
            <div className="container">
                <h1>Title :- {state.ui.currentAssignment.title}</h1>
                <p>Description:- {state.ui.currentAssignment.description}</p>
                <div className="details">
                    <h3>
                        Deadline :- {state.ui.currentAssignment.deadline}
                    </h3>
                    <h3>
                        Teacher : - {state.ui.currentAssignment.teacher}
                    </h3>
                </div>
                <div className="file-input">
                    <FileBase64
                        type="file"
                        multiple={ false }
                        onDone ={({base64})=>setFile(base64)}
                    />
                </div>
                <button onClick={handleSubmit}>Submit Assignment</button>

            </div>
        </div>
    )
}

export default SubmissionUpload;
