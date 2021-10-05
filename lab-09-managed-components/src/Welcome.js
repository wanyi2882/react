import React from 'react'

export default function Welcome(props){
    return(<React.Fragment>
        <h1>Welcome</h1>
        <p>Your Details are</p>
        <ul>
            <li>Username: {props.username} </li>
            <li>Email: {props.email} </li>
        </ul>
    </React.Fragment>)
}