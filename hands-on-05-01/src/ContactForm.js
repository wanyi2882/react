import React from "react"

export default class ContactForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        enquiry: "",
        country: "",
        message: "",
        contact: []
    }

    render (){


        return (
            <React.Fragment>
            <div>
                <label>First Name:</label>
                <input type = "text" name = "firstName" value = {this.state.firstName} onChange={this.updateFormField}/>
            </div>

            <div>
                <label>Last Name:</label>
                <input type = "text" name = "lastName" value = {this.state.lastName} onChange={this.updateFormField}/>
            </div>

            <div>
                <label>Enquiries</label>
                <input type="radio" name="enquiry" value="support" onChange={this.updateFormField} checked={this.state.enquiry == "support"}/><span>support</span>
                <input type="radio" name="enquiry" value="sales" onChange={this.updateFormField} checked={this.state.enquiry == "sales"}/><span>sales</span>
                <input type="radio" name="enquiry" value="marketing" onChange={this.updateFormField} checked={this.state.enquiry == "marketing"}/><span>marketing</span>
            </div>

            <div>
                <label>Country</label>
                <select name="country" onChange={this.updateCountry} value={this.state.country}>
                <option value="sg">Singapore</option>
                <option value="my">Malaysia</option>
                <option value="id">Indonesia</option>
                </select>
            </div>

            <div>
                <label>How will you like to be contacted</label>
                <input type="checkbox" name="contactMethod" value="email" onChange={this.updateContact}/><span>Email</span>
                <input type="checkbox" name="contactMethod" value="phone" onChange={this.updateContact}/><span>Phone</span>
                <input type="checkbox" name="contactMethod" value="slowMail" onChange={this.updateContact}/><span>Slow Mail</span>
            </div>

            <button onClick={this.message} disabled={!this.state.lastName || !this.state.firstName || !this.state.enquiry || !this.state.country}>Submit</button>
        
        </React.Fragment>
        )
    }

    updateContact = (evt) => {
        //check if contact array contains any of the checked values 
        if (this.state.contact.includes(evt.target.value)){
            //1. clone the array
            let clone = this.state.contact.slice()

            //2. remove it from the array
            let index = this.state.contact.indexOf(evt.target.value)
            clone.splice(index,1)

            //3. use setState to update the array in state
            this.setState({
                contact: clone
            })
        } else {
            //If not in array then we add it in
            //1. clone the array
            let clone = this.state.contact.slice();

            //2. change the copy by adding in the checked value
            clone.push(evt.target.value)

            //3. use setState to replace the array
            this.setState({
                contact: clone
            })
        }
    }

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    updateCountry = (evt) => {
        this.setState({
            country: evt.target.value
        })
    }

    message = () => {
        return(alert(
            "First Name:" + this.state.firstName + "\n" +
            "Last Name:" + this.state.lastName + "\n" +
            "Enquiries:" + this.state.enquiry + "\n" +
            "Country:" + this.state.country
        )
        )
    }
}