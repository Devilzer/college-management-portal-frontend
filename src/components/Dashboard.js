import React from 'react'
import Assignment from "./Assignment";
import AddAssignment from "./AddAssignment";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    var subMenu;
    var subContainer;
    if(state.user.userType==="student"){
        subMenu = <div className="sub-menu">
        <h2 className="sm-text">
            Assignments
        </h2>
        <h2 className="sm-text">
         Submitted Assignments
        </h2>
        </div>;
    }
    else if(state.user.userType==="teacher"){
        subMenu = <div className="sub-menu">
        <h2 className="sm-text">
            Submissions
        </h2>
        <h2 className="sm-text">
         Add Assignments
        </h2>
        </div>;
    }
    return (
        <div className="container-two">
            {subMenu}
            <div className="sub-container">
                {/* <Assignment/> */}
                <AddAssignment/>
                
            </div>
        </div>
    )
}

export default Dashboard;
