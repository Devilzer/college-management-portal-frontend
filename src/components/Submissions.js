import React from 'react';
import { useDispatch } from "react-redux";
import { setCurrentAssignment, setAssignmentPage } from "../redux/ui/uiActions";
function Submissions(props) {
    const dispatch = useDispatch();
    var status;
    if(props.submission.marks===""){
        status = <span style={{"color" : 'orange'}}>
           Not Evaluated
        </span>
    }
    else{
        status =<span style={{"color" : 'white'}}>
        Evaluated
     </span>;
    }
    const handelClick =()=>{
        if(props.submission.marks===""){
            dispatch(setAssignmentPage());
            dispatch(setCurrentAssignment(props.submission));
        }
        else{
            return;
        }   
    }
    return (
        
            <div className ="assignment violet" onClick={handelClick}>
                    <h2 className="title">
                        {props.submission.title}
                    </h2>
                    <p className="description">
                        {props.submission.description}
                    </p>
                    <div className="details">
                    <p className="deadline">
                        {status}
                    </p>
                        <p className="teacher">
                            <span>
                               Submitted By :-
                            </span>&nbsp;{props.submission.student}
                        </p>
                    </div>
                </div>
    );
};

export default Submissions;
