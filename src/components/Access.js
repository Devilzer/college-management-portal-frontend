import React,{useState} from 'react';

function Access() {
    const [user,setUser]=useState("");
    var warning;
    var studentBtn;
    var teacherBtn;
    
    const setStudent = ()=>{
        setUser("student");
    };
    const setTeacher = ()=>{
        setUser("teacher");
    }

    if(user===""){
        studentBtn=<h3 className="s-btn" onClick={setStudent}>
        <i class="fas fa-user-graduate"></i>&nbsp; Student
        </h3>;
        teacherBtn=<h3 className="s-btn" onClick={setTeacher}>
        <i class="fas fa-chalkboard-teacher"></i>&nbsp;
            Teacher
        </h3>;
        warning=<div className="warning">
            Please Select User type!
        </div>;
    }
    else if(user==="student"){
        studentBtn=<h3 className="s-btn selected">
        <i class="fas fa-user-graduate"></i>&nbsp; Student
        </h3>;
        teacherBtn=<h3 className="s-btn" onClick={setTeacher}>
        <i class="fas fa-chalkboard-teacher"></i>&nbsp;
            Teacher
        </h3>;
        warning=<div>
        </div>;
    }
    else if(user==="teacher"){
        studentBtn=<h3 className="s-btn" onClick={setStudent}>
        <i class="fas fa-user-graduate"></i>&nbsp; Student
        </h3>;
        teacherBtn=<h3 className="s-btn selected">
        <i class="fas fa-chalkboard-teacher"></i>&nbsp;
            Teacher
        </h3>;
        warning=<div>
        </div>;
    }
    return (
        <div className="access-container">
            <div className="selector-container">
                <div className="title-heading">
                    <h1>
                        CMS
                    </h1>
                    <p>
                        College Management Portal
                    </p>
                </div>
                <div className="selector-button">
                    {studentBtn}
                    {teacherBtn}
                </div>
                {warning}
            </div>
            <div className="bdr">

            </div>
            <div className="input-container">

            </div>
        </div>
    );
};

export default Access;
