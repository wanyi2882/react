import React from 'react'

export default class BudgetTracker extends React.Component{
    state = {
        transactions: [
            {
                _id: Math.floor(Math.random() * 10000),
                date: "12-08-2021",
                description: "Grab",
                category: "transport",
                amount: 25,
                reconciled: true
              },
              {
                _id: Math.floor(Math.random() * 10000),
                date: "13-08-2021",
                description: "Movie",
                category: "entertainment",
                amount: 15,
                reconciled: false
              },
              {
                _id: Math.floor(Math.random() * 10000),
                date: "14-08-2021",
                description: "Simple Cafe",
                category: "food",
                amount: 35,
                reconciled: false
              }
        ],
        newTrasactionDate: "",
        newTrasactionDescription: "",
        newTransactionCategory: "",
        newTransactionAmount: 0,
        newTransactionReconciled: false
    }

    displayTransactions() {
        let transactionsJSX = []
        for (let transaction of this.state.transactions){
            let eachTransactionJSX = (
                <React.Fragment key={transaction._id}>
                    <div className="card my-3" style={{width: "18rem"}}>                  
                    <div className="card-body">
                        <h5 className="card-title">{transaction.date}</h5>
                        <p className="card-text">{transaction.description}</p>
                        <p>Category: {transaction.category}</p>
                        <p>Amount: ${transaction.amount}</p>
                        <div className="form-check-inline">
                            <input className="form-check-input mx-1" type="checkbox" 
                            value="transaction.reconciled" 
                            id="reconciled" name="reconciled" />
                            <label className="form-check-label">Reconcile</label>
                        </div>
                        <button className="btn btn-primary btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm mx-1">Delete</button>
                    </div>
                </div>
                </React.Fragment>
            )
            transactionsJSX.push(eachTransactionJSX)
        }
        return transactionsJSX
    }

    addNewTransaction(){
        return(
            <React.Fragment>
                <div>
                    <label>Date of Transaction</label>
                    <input type="text" name="newTrasactionDate" value={this.state.newTrasactionDate} 
                    placeholder="DD-MM-YYYY" onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Transaction Description</label>
                    <input type="text" name="newTrasactionDescription" 
                    value={this.state.newTrasactionDescription} onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Category</label>
                    <select name="newTransactionCategory" onChange={this.updateFormField} 
                    value={this.state.newTransactionCategory}>
                        <option value="transport">transport</option>
                        <option value="entertainment">entertainment</option>
                        <option value="food">food</option>
                        <option value="bills">bills</option>
                        <option value="loans">loans</option>
                        <option value="others">others</option>
                    </select>
                </div>
                <div>
                    <label>Amount in dollars</label>
                    <input type="number" name="newTransactionAmount" onChange={this.updateFormField} 
                    value={this.state.newTransactionAmount}/>
                </div>
                <div>
                    <label>Reconciled</label>
                    <input type="checkbox" name="newTransactionReconciled" 
                    value={this.state.newTransactionReconciled} onChange={this.updateCheckBox} checked={this.state.newTransactionReconciled == true}/>
                </div>
                <button className="btn btn-sm btn-success" onClick={this.addTransactionToList}>Submit</button>
            </React.Fragment>
        )
    }

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    updateCheckBox = (evt) => {
        if (evt.target.checked == true){
            this.setState({
                newTransactionReconciled: true
            })
        } else {
            this.setState({
                newTransactionReconciled: false
            })
        }

    }

    addTransactionToList = () => {
        let cloneArray = {
            _id: Math.floor(Math.random() * 10000),
            date: this.state.newTrasactionDate,
            description: this.state.newTrasactionDescription,
            category: this.state.newTransactionCategory,
            amount: parseInt(this.state.newTransactionAmount),
            reconciled: this.state.newTransactionReconciled
          }

        let clone = this.state.transactions.slice()

        clone.push(cloneArray)

        this.setState({
            transactions: clone
        })


    }

    render(){
        return(
            <React.Fragment>
                <h1>Add New Transactions</h1>
                {this.addNewTransaction()}
                <h1>Transactions</h1>
                {this.displayTransactions()}
            </React.Fragment>
        )
    }
}