import React from 'react'
export default function Form (props){

        return(<React.Fragment>
            <div>
                <label>Username: </label>
                <input name="username" value={props.username} onChange={props.updateFormField}/>
            </div>
            <div>
                <label>Email: </label>
                <input name="email" value={props.email} onChange={props.updateFormField}/>
            </div>
            <button>Register</button>
        </React.Fragment>)
    
}