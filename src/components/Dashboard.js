import React from 'react'
import Assignment from "./Assignment";
import AddAssignment from "./AddAssignment";
import StudentMenu from "./StudentMenu";
import TeacherMenu from "./TeacherMenu";
import SubmissionUpload from "./SubmissionUpload";
import SubittedAssignment from "./SubittedAssignment";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    var subMenu;
    var subContainer;
    if(state.user.userType==="student"){
        subMenu = <StudentMenu/>;
    }
    else if(state.user.userType==="teacher"){
        subMenu = <TeacherMenu/>;
    }
    if(state.user.userType==="student"){
        if(state.ui.studentMenu==="assignments"){
            if(state.ui.assignmentPage){
                subContainer = <SubmissionUpload/>
            }
            else{
                subContainer = <div className="sub-container">
                {
                    state.assignment.assignments.map((assignment,index)=>(
                        <Assignment
                            assignment = {assignment}
                            index={index}
                            key={index}
                        />
                    ))
                }
                </div>;
                }
            }
            else{
                subContainer = <div className="sub-container">
                    {
                        state.assignment.submissions.submissions.map((submission,index)=>(
                            <SubittedAssignment
                            submission = {submission}
                            index = {index}
                            key ={index}
                            />
                        ))
                    }
                    
                </div>

            }
    }
    else if(state.user.userType==="teacher"){
        if(state.ui.teacherMenu==="addAssignment"){
            subContainer =<div className="sub-container">
                <AddAssignment/>
            </div>;  
        }
        else{
            subContainer = <div className="sub-container">
                fhghjk
            </div>
        }
    }
    return (
        <div className="container-two">
            {subMenu}
            {subContainer}
                {/* <Assignment/> */}
                {/* <AddAssignment/> */}
        </div>
    )
}

export default Dashboard;
