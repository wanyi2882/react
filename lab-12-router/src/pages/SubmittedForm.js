import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SubmittedForm() {
    const location = useLocation();
    const fullname = location.state.formData.fullname
    const email = location.state.formData.email

    return <React.Fragment>
        <h1>Thank you for your submission</h1>
        <h2>Your submitted details</h2>
        <ul>
            <li>Fullname: {fullname}</li>
            <li>Email: {email}</li>
        </ul>
    </React.Fragment>

}