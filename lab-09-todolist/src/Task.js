import React from 'react'

export default function Task(props) {
    return <React.Fragment key={props.task._id}>
        <div className="card my-3">
            <div className="card-body">
                <h3>{props.task.description}</h3>
                <ul>
                    <li>Date Due:{props.task.date_due}</li>
                    <li>Completed:
                        <input type="checkbox" 
                         value={props.task.done}
                         checked={props.task.done}
                         onChange={()=>{
                             props.toggleTask(props.task)
                         }}/>         
                    </li>
                </ul>
                <button className="btn btn-primary btn-sm mx-3"
                    onClick={()=>{
                        props.edit(props.task)
                    }}
                >Edit</button>
                <button className="btn btn-danger btn-sm"
                    onClick={()=>{
                        props.delete(props.task)
                    }}
                >Delete</button>
            </div>        
        </div>
    </React.Fragment>
}