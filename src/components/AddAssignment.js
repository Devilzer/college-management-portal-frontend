import React from 'react';

function AddAssignment() {
    return (
        <div className="add-assignments">
            <input type="text"  placeholder="Title"/>
            <textarea className="discp" placeholder="Description..."></textarea>
            <div className="deadline">
            <h3>Deadline.</h3>
            <input type="date" />
            </div>
            <button>Add Assignment</button>
        </div>
    )
}

export default AddAssignment;
