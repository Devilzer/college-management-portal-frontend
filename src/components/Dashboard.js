import React from 'react'
import Assignment from "./Assignment";

function Dashboard() {
    return (
        <div className="container-two">
            <div className="sub-menu">
                <h2 className="sm-text">
                    Assignments
                </h2>
                <h2 className="sm-text">
                 Submitted Assignments
                </h2>
            </div>
            <div className="sub-container">
                <Assignment/>
                
            </div>
        </div>
    )
}

export default Dashboard;
