import React,{useState} from 'react';
import { useSelector } from "react-redux";
import FileBase64 from 'react-file-base64';

function SubmissionUpload() {
    const [file,setFile]=useState("");
    const state = useSelector(state=>state);

    const handleSubmit=()=>{
        console.log(file);
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
