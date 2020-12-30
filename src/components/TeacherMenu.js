import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setTeacherMenu } from "../redux/ui/uiActions";
import { resetAssignmentPage } from  "../redux/ui/uiActions";
function TeacherMenu() {

    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    var subMenu;
    const handleClick = ()=>{
        dispatch(setTeacherMenu("submissions"));
        dispatch(resetAssignmentPage());
    }
    if(state.ui.teacherMenu==="submissions"){
        subMenu = <div className="sub-menu ">
            <h2 className="sm-text selected" onClick={handleClick}>
            Submissions 
            </h2>
            <h2 className="sm-text" onClick={()=>dispatch(setTeacherMenu("addAssignment"))}>
            Add Assignment
            </h2>
        </div>
    }
    else if(state.ui.teacherMenu==="addAssignment"){
        subMenu = <div className="sub-menu">
            <h2 className="sm-text" onClick={handleClick}>
            Submissions 
            </h2>
            <h2 className="sm-text selected">
            Add Assignment
            </h2>
        </div>
    }

    return (
        <div>
            {subMenu}
        </div>
        
    )
}

export default TeacherMenu;
