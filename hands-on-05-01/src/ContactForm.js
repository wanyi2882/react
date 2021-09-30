import React from "react"

export default class ContactForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        enquiry: "",
        country: "",
        message: "",
        isDisable: true
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

            <button onClick={this.message} disabled={!this.state.lastName || !this.state.firstName || !this.state.enquiry || !this.state.country}>Submit</button>
        </React.Fragment>
        )
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