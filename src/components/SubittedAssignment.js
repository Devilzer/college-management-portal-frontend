import React from 'react';

function SubittedAssignment(props) {
    var details ;
    if(props.submission.marks===""){
        details = <p className="deadline">
                    <span>
                    Not Evaluated.
                    </span>&nbsp;
                </p>;
    }
    else{
        details  = <p className="deadline">
        <span>
        Marks :-
        </span>&nbsp;
        {props.submission.marks}
    </p>;
    }
    return (
        <div className ="assignment green">
                    <h2 className="title">
                        {props.submission.title}
                    </h2>
                    <p className="description">
                        {props.submission.description}
                    </p>
                    <div className="details">
                        {details}
                        <p className="teacher">
                            <span>
                                By :-
                            </span>&nbsp;Teacher
                        </p>
                    </div>
        </div>
    )
}

export default SubittedAssignment;
