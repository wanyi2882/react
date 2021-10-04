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
        newTransactionReconciled: false,
        transactionBeingEdited: {},
        modifyTrasactionDate: "",
        modifyTrasactionDescription: "",
        modifyTransactionCategory: "",
        modifyTransactionAmount: 0,
        modifyTransactionReconciled: false
    }

    displayTransactions() {
        let transactionsJSX = []
        for (let transaction of this.state.transactions){
            if (transaction._id != this.state.transactionBeingEdited._id){
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
                        <button className="btn btn-primary btn-sm"
                        onClick={() => {this.editTransactions(transaction)}}>Edit</button>
                        <button className="btn btn-danger btn-sm mx-1" 
                        onClick={() => {this.deleteTransactions(transaction)}}>Delete</button>
                    </div>
                </div>
                </React.Fragment>
            )
            transactionsJSX.push(eachTransactionJSX)
            } else {
                let eachTransactionJSX = this.displayEditTransaction()
                transactionsJSX.push(eachTransactionJSX)
            }
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
                [evt.target.name]: true
            })
        } else {
            this.setState({
                [evt.target.name]: false
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

    editTransactions(transaction){
        this.setState({
            transactionBeingEdited: transaction,
            modifyTrasactionDate: transaction.date,
            modifyTrasactionDescription: transaction.description,
            modifyTransactionCategory: transaction.category,
            modifyTransactionAmount: transaction.amount,
            modifyTransactionReconciled: transaction.reconciled
        })
    }

    displayEditTransaction = () => {
        return(
            <React.Fragment>
            <h6>Edit Transanction</h6>

            <div>
                <label>Date of Transaction</label>
                <input type="text" name="odifyTrasactionDate" value={this.state.modifyTrasactionDate} 
                placeholder="DD-MM-YYYY" onChange={this.updateFormField}/>
            </div>
            <div>
                <label>Transaction Description</label>
                <input type="text" name="modifyTrasactionDescription" 
                value={this.state.modifyTrasactionDescription} onChange={this.updateFormField}/>
            </div>
            <div>
                <label>Category</label>
                <select name="modifyTransactionCategory" onChange={this.updateFormField} 
                value={this.state.modifyTransactionCategory}>
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
                <input type="number" name="modifyTransactionAmount" onChange={this.updateFormField} 
                value={this.state.modifyTransactionAmount}/>
            </div>
            <div>
                <label>Reconciled</label>
                <input type="checkbox" name="modifyTransactionReconciled" 
                value={this.state.modifyTransactionReconciled} onChange={this.updateCheckBox} 
                checked={this.state.modifyTransactionReconciled == true}/>
            </div>
            <button className="btn btn-sm btn-info" onClick={this.updateEditTransaction}>
                Confirm Edit</button>
        </React.Fragment>
        )

    }
    
    updateEditTransaction = () => {
        let cloneArray = {
            _id: this.state.transactionBeingEdited._id,
            date: this.state.modifyTrasactionDate,
             description: this.state.modifyTrasactionDescription,
            category: this.state.modifyTransactionCategory,
            amount: parseInt(this.state.modifyTransactionAmount),
            reconciled: this.state.modifyTransactionReconciled
        }

        let indexToReplace = this.state.transactions.findIndex(eachTransaction => 
            eachTransaction._id == this.state.transactionBeingEdited._id)

        let clone = [...this.state.transactions.slice(0,indexToReplace),
            cloneArray,
            ...this.state.transactions.slice(indexToReplace+1)]

        this.setState({
            transactions: clone,
            transactionBeingEdited: {}
        })    
    }

    deleteTransactions(transaction){
        let indexToRemove = this.state.transactions.findIndex(eachTransaction => 
            eachTransaction._id == transaction._id)

        let clone = [...this.state.transactions.slice(0,indexToRemove),
            ...this.state.transactions.slice(indexToRemove+1)]

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