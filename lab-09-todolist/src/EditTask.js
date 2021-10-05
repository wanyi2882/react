import React from 'react'

export default function EditTask(props) {
    return <React.Fragment>
        <h1>Edit Task</h1>
        <div>
            <label className="form-label">Name:</label>
            <input type="text"
                name="modifiedTaskName"
                value={props.taskName}
                onChange={props.updateField}
                className="form-control"
            />
        </div>
        <div>
            <label className="form-label">Due Date:</label>
            <input type="date"
                name="modifiedTaskDateDue"
                value={props.dueDate}
                onChange={props.updateField}
                className="form-control"
            />
        </div>
        <button className="my-3" 
            onClick={props.editTask}>Edit Task</button>
    </React.Fragment>
}