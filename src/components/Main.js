import React from 'react';
import Profile from "./Profile";
import Dashboard from "./Dashboard";

function Main() {
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
                <div className="menu">
                    <div className="mh">Menu</div>
                    <h2 className="btn">
                    <i className="fas fa-user-alt"></i> &nbsp;Dashboard
                    </h2>
                    <h2 className="btn">
                    <i className="fas fa-columns"></i> &nbsp;Profile
                    </h2>
                </div>
                <h2 className="sign-out">
                <i className="fas fa-sign-out-alt"></i> &nbsp; Sign Out
                </h2>
            </div>
            {/* <Profile/> */}
            <Dashboard/>

        </div>
    );
};

export default Main;
