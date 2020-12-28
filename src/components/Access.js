import React,{useState} from 'react';

function Access() {
    const [user,setUser]=useState("");
    const [access,setAccess]=useState("signin");
    var warning;
    var studentBtn;
    var teacherBtn;
    var inputHeading;
    var inputFeilds;

    
    const setStudent = ()=>{
        setUser("student");
    };
    const setTeacher = ()=>{
        setUser("teacher");
    };
    const setSignin = ()=>{
      setAccess("signin");  
    };
    const setSignup = ()=>{
        setAccess("signup");  
      };
    const handelSubmit =(e)=>{
        e.preventDefault();

    };
    
    
    if(access==="signin"){
        inputHeading = <div className="input-heading">
        <h3 className="s-btn selected">
            SignIn&nbsp;<i className="fas fa-sign-in-alt"></i>
        </h3>
        <h3 className="s-btn" onClick={setSignup}>
            SignUp&nbsp;<i className="fas fa-user-plus"></i>
        </h3>
    </div>;
        inputFeilds=<div className="input-feild">
        <form onSubmit={handelSubmit}>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <button>Sign-In</button>
        </form>
        </div>;
    
    }
    else if(access==="signup"){
        inputHeading = <div className="input-heading">
        <h3 className="s-btn" onClick={setSignin}>
            SignIn&nbsp;<i className="fas fa-sign-in-alt"></i>
        </h3>
        <h3 className="s-btn selected">
            SignUp&nbsp;<i className="fas fa-user-plus"></i>
        </h3>
        </div>;
        inputFeilds=<div className="input-feild">
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <button>Sign-Up</button>
            </form>
            </div>;
    }

    if(user===""){
        studentBtn=<h3 className="s-btn" onClick={setStudent}>
        <i className="fas fa-user-graduate"></i>&nbsp; Student
        </h3>;
        teacherBtn=<h3 className="s-btn" onClick={setTeacher}>
        <i className="fas fa-chalkboard-teacher"></i>&nbsp;
            Teacher
        </h3>;
        warning=<div className="warning">
            Please Select User type!
        </div>;
    }
    else if(user==="student"){
        studentBtn=<h3 className="s-btn selected">
        <i className="fas fa-user-graduate"></i>&nbsp; Student
        </h3>;
        teacherBtn=<h3 className="s-btn" onClick={setTeacher}>
        <i className="fas fa-chalkboard-teacher"></i>&nbsp;
            Teacher
        </h3>;
        warning=<div>
        </div>;
    }
    else if(user==="teacher"){
        studentBtn=<h3 className="s-btn" onClick={setStudent}>
        <i className="fas fa-user-graduate"></i>&nbsp; Student
        </h3>;
        teacherBtn=<h3 className="s-btn selected">
        <i className="fas fa-chalkboard-teacher"></i>&nbsp;
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
                {inputHeading}
                {inputFeilds}
            </div>
        </div>
    );
};

export default Access;
