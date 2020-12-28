import React from 'react';

function Profile() {
    return (
        <div className="profile-container">
            {/* <div className="info name">
                Name : deepak
            </div>
            <div className="info">
                email : abc@gmail.com
            </div>
            <div className="info">
                password : jshkahjn
            </div>
            <div className="btn">
                <i className="fas fa-edit"></i>
            </div> */}
            <div className="info name">
                 <input type="text" />
            </div>
            <div className="info">
                <input type="email" />
            </div>
            <div className="info">
                 <input type="text" />
            </div>
            <div className="btn">
                <i className="far fa-check-square"></i>
            </div>
            
        </div>
    )
}

export default Profile;
