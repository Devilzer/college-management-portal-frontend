import React from 'react';
import moment from "moment";
import { setCurrentAssignment, setAssignmentPage } from "../redux/ui/uiActions";
import { useDispatch } from "react-redux";

function Assignment(props) {
    const dispatch = useDispatch();
    const today = moment().format("YYYY-MM-DD");
    var classes;
    if(props.assignment.deadline <today){
        classes="assignment orange"
    }
    else{
        classes="assignment blue"
    }
    const handleClick = ()=>{
        if(props.assignment.deadline <today){
            return;
        }
        else{
            console.log(props.assignment);
            dispatch(setAssignmentPage());
            dispatch(setCurrentAssignment(props.assignment));
        }
    }
    return (
        <div className={classes} onClick={handleClick}>
        <h2 className="title">
            {props.assignment.title}
        </h2>
        <p className="description">
            {props.assignment.description}
        </p>
        <div className="details">
        <p className="deadline">
            <span>
            Deadline :-
            </span>&nbsp;
            {props.assignment.deadline}
        </p>
        <p className="teacher">
            <span>
                By :-
            </span>&nbsp;{props.assignment.teacher}
        </p>
        </div>
        </div>
    )
}

export default Assignment;
