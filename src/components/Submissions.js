import React from 'react';

function Submissions(props) {
    var status;
    if(props.submission.marks===""){
        status = "Not Evaluated";
    }
    else{
        status ="Evaluated";
    }
    return (
        
            <div className ="assignment violet">
                    <h2 className="title">
                        {props.submission.title}
                    </h2>
                    <p className="description">
                        {props.submission.description}
                    </p>
                    <div className="details">
                    <p className="deadline">
                        <span>
                            {status}
                        </span>&nbsp;
                    </p>
                        <p className="teacher">
                            <span>
                               Submitted By :-
                            </span>&nbsp;{props.submission.student}
                        </p>
                    </div>
                </div>
    );
};

export default Submissions;
