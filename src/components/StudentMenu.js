import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setStudentMenu } from "../redux/ui/uiActions";

function StudentMenu() {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    var subMenu;
    if(state.ui.studentMenu==="assignments"){
        subMenu = <div className="sub-menu ">
            <h2 className="sm-text selected">
                Assignments 
            </h2>
            <h2 className="sm-text" onClick={()=>dispatch(setStudentMenu("submittedAssignments"))}>
             Submitted Assignments
            </h2>
        </div>
    }
    else if(state.ui.studentMenu==="submittedAssignments"){
        subMenu = <div className="sub-menu">
            <h2 className="sm-text" onClick={()=>dispatch(setStudentMenu("assignments"))}>
            Assignments 
            </h2>
            <h2 className="sm-text selected">
            Submitted Assignments
            </h2>
        </div>
    }

    return (
        <div>
            {subMenu}
        </div>
        
    )
};

export default StudentMenu;
