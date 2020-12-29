import React from 'react'
import Assignment from "./Assignment";
import AddAssignment from "./AddAssignment";
import StudentMenu from "./StudentMenu";
import TeacherMenu from "./TeacherMenu";
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
    return (
        <div className="container-two">
            {subMenu}
            <div className="sub-container">
                <Assignment/>
                {/* <AddAssignment/> */}
                
            </div>
        </div>
    )
}

export default Dashboard;
