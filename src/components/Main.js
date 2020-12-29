import React,{useEffect} from 'react';
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { setMainMenu } from "../redux/ui/uiActions";
import { logoutUser } from "../redux/user/userActions";
import {getAllAssignments} from "../redux/assignments/assignmentActions"

function Main() {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    
    useEffect(()=>dispatch(getAllAssignments()),[dispatch]);

    var button ;
    var subContainer;
    if(state.ui.mainMenu==="dashboard"){
        subContainer=<Dashboard/>;
        button = <div className="menu">
        <div className="mh">Menu</div>
        <h2 className="btn selected">
        <i className="fas fa-user-alt"></i> &nbsp;Dashboard
        </h2>
        <h2 className="btn" onClick={()=>dispatch(setMainMenu("profile"))}>
        <i className="fas fa-columns"></i> &nbsp;Profile
        </h2>
        </div>;
    }
    else if(state.ui.mainMenu==="profile"){
        subContainer=<Profile/>
        button = <div className="menu">
        <div className="mh">Menu</div>
        <h2 className="btn " onClick={()=>dispatch(setMainMenu("dashboard"))}>
        <i className="fas fa-user-alt"></i> &nbsp;Dashboard
        </h2>
        <h2 className="btn selected">
        <i className="fas fa-columns"></i> &nbsp;Profile
        </h2>
        </div>;
    }
    return (
        <div className="main">
            <div className="container-one">
                <div className="heading-container">
                    <h1 className="wellcome">
                        Wellcome
                    </h1>
                    <h3 className="name">
                        Name
                    </h3>
                </div>
                <div className="bdr">

                </div>
                {button}
                <h2 className="sign-out" onClick={()=>dispatch(logoutUser())}>
                <i className="fas fa-sign-out-alt"></i> &nbsp; Sign Out
                </h2>
            </div>
            {subContainer}

        </div>
    );
};

export default Main;
