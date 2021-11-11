import React, {useState} from 'react'

import { useHistory } from 'react-router-dom'

export default function ContactUs(){

    // use the history hook from react-router-dom
    // inside the ContactUs component
    const history = useHistory()

    // 1. useState takes in one argument, which is the defualt value of the staate variable
    // 2. useState returns an array of two elemets
    // --> element 1: is the current value of the state variable
    // --> element 2: a function that is used to change the state variable
    // hooks in general method
    // const [fullname, setFullname] = useState("")
    // const [email, setEmail] = useState("")

    // onChange
    // function updateFullname(evt){
    //     setFullname(evt.target.value)
    // }

    // function updateEmail(evt){
    //     setEmail(evt.target.value)
    // }

    const [formState, setFormState] = useState({
        'fullname': '',
        'email':''
    })

    const updateFormField = (e) => {

        // to update an existing object in react:

        // 1. clone the object
        let clone = {...formState};

        // 2. make the change
        clone[e.target.name] = e.target.value;

        // 3. set back the state
        setFormState(clone);

        // setFormState({
        //     ...formState,
        //     [e.target.name] : e.target.value
        // })
    }

    function submitForm () {
        history.push('/form-submitted',{
            'formData': formState
        })
    }
    return <React.Fragment>
        <h1>Contact Us</h1>
        <div>
            <div>
                <label>Full Name: </label>
                <input type="text" name="fullname" value={formState.fullname} onChange={updateFormField}/>
            </div>

            <div>
                <label>Email: </label>
                <input type="text" name="email" value={formState.email} onChange={updateFormField}/>
            </div>
            <input type="button" onClick={submitForm} value="Contact Us"/>
        </div>
    </React.Fragment>
}