import React from 'react'

export default class BookingForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        seating: "",
        smoking: "",
        appetizer: []
    }

    seatings = [
        {
            display: "outdoors",
            value: "outdoors"
        },
        {
            display: "indoors",
            value: "indoors"
        },
        {
            display: "VIP indoors",
            value: "VIPIndoors"
        }
    ]

    smokingArea = [
        {
            display: "smoking",
            value: "smoking"
        },
        {
            display: "non-smoking",
            value: "non-smoking"
        }
    ]

    appetizers = [
        {
            display: "raw fishes",
            value: "rawFishes"
        },
        {
            display: "salad",
            value: "salad"
        },
        {
            display: "fried cuttlefish",
            value: "friedCuttlefish"
        },
        {
            display: "peanuts",
            value: "peanuts"
        }
    ]

    render(){
        return (
            <React.Fragment>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={this.state.firstName} onChange={this.updateFirstName}/>
                </div>

                <div>
                    <label>Last Name:</label>
                    <input type="text" value={this.state.lastName} onChange={this.updateLastName}/>
                </div>

                <div>
                    <label>Seating:</label>
                    {
                        this.seatings.map((seating) => {
                            return(
                                <React.Fragment>
                                    <input type="radio"
                                    name="seatings"
                                    value={seating.value}
                                    onChange={this.updateSeatings}/>
                                    <span>{seating.display}</span>
                                </React.Fragment>
                            )
                        })
                    }
                 </div>

                 <div>
                     <label>Smoking Area Choice</label>
                     <select value={this.state.smoking} onChange={this.updateSmoking}>
                     {
                         this.smokingArea.map((smoking) => {
                             return(
                                 <React.Fragment>
                                     <option value={smoking.value}>
                                         {smoking.display}
                                     </option>
                                 </React.Fragment>
                             )
                         })
                     }
                     </select>
                 </div>

                 <div>
                     <label>Choice of appetizers</label>
                     {
                         this.appetizers.map((appetizer) => {
                             return(
                                 <React.Fragment>
                                    <input type="checkbox"
                                    name="appetizer"
                                    value={appetizer.value}
                                    onChange={this.updateAppetizers}/>
                                    <span>{appetizer.display}</span>
                                 </React.Fragment>
                             )
                         })
                     }

                 </div>


            </React.Fragment>
        )

    }

    updateFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    updateLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    updateSeatings = (event) => {
        this.setState({
            seating: event.target.value
        })
    }

    updateSmoking = (event) => {
        this.setState({
            smoking: event.target.value
        })
    }

    updateAppetizers = (event) => {
        if (this.state.appetizer.includes(event.target.value)){
            //1. clone the array
            let clone = this.state.appetizer.slice()
            //2. remove the element from the array
            let index = this.state.appetizer.indexOf(event.target.value)
            clone.splice(index,1)
            //3. use setState to update the array in state
            this.setState({
                appetizer: clone
            })
        } else {
            //1. clone the array
            let clone = [... this.state.appetizer]
            //2. add to array
            clone.push(event.target.value)
            //3. use setState to updat array
            this.setState({
                appetizer: clone
            })

        }
    }
}