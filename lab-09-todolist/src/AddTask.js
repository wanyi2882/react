import React from 'react'

export default function AddTask(props) {
    return <React.Fragment>
        <h1>Add New Task</h1>
        <div>
            <label className="form-label">Name:</label>
            <input type="text"
                name="newTaskName"
                value={props.taskName}
                onChange={props.updateField}
                className="form-control"
            />
        </div>
        <div>
            <label className="form-label">Due Date:</label>
            <input type="date"
                name="newTaskDueDate"
                value={props.dueDate}
                onChange={props.updateField}
                className="form-control"
            />
        </div>
        <button className="my-3" 
            onClick={props.addTask}>Add New Task</button>
    </React.Fragment>
}