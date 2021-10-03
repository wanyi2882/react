import React from 'react'

export default class Todolist extends React.Component {
    state = {
        'tasks': [
            {
                'id': 1,
                'description': "Walk the dog",
                'date_due': '2021-10-02',
                'done': false
            },
            {
                'id': 2,
                'description': "Water the plants",
                'date_due': '2021-10-03',
                'done': false
            },
            {
                'id': 3,
                'description': 'Pay the bills',
                'date_due': '2021-10-04',
                'done': false
            }
        ],
        newTaskName:"",
        newDueDate:""
    }

    updateTaskName = (evt) => {
        this.setState({
            'newTaskName' : evt.target.value
        })
    }

    updateDueDate = (evt) => {
        this.setState({
            'newDueDate' : evt.target.value
        })
    }

    addNewTask = () => {
        let newTask = {
            "id": Math.floor(Math.random() * 100000 + 99999),
            "description": this.state.newTaskName,
            "due_date": this.state.newDueDate,
        }

        // step 1: clone the array
        let cloned = this.state.tasks.slice();

        // 2. modify the cloned array
        cloned.push(newTask);

        // 3. set into the state
        this.setState({
            'tasks': cloned
        })

    }

    checkTask = (taskId) => {
        // let wantedTask = null;
        // for (let task of this.state.tasks) {
        //     if (task.id == taskId) {
        //         wantedTask = task;
        //         break;
        //     }
        // }        
        let currentTask = this.state.tasks.filter( t => t.id == taskId)[0];

        // cloned the task using the spread operator
        let modifiedTask = {...currentTask};

        // toggle the done (if was true, dhange to false. If false, change to true)
        modifiedTask.done = !modifiedTask.done;

        // step 1 : clone the array
        let clonedArray = this.state.tasks.slice();

        // step 2: replace the original task in the clone with the modified task
        // first method : replace by index
        let indexOfModifiedTask = clonedArray.findIndex( t => t.id == modifiedTask.id);
        clonedArray[indexOfModifiedTask] = modifiedTask;

        // step 3: put the clone array into the state
        this.setState({
            'tasks': clonedArray
        })
    }

    checkTaskV2 = (taskId) => {
        let currentTask = this.state.tasks.filter( t => t.id == taskId)[0];
        let modifiedTask = { ...currentTask, done: !currentTask.done}; 

        let indexToModify = this.state.tasks.findIndex(t => t.id == modifiedTask.id);
        let clonedArray = [
            ...this.state.tasks.slice(0, indexToModify),
            modifiedTask,
            ...this.state.tasks.slice(indexToModify+1)
        ]
        this.setState({
            'tasks': clonedArray
        })
    }

    checkTaskV3 = (taskId) => {
        let currentTask = this.state.tasks.filter( t => t.id == taskId)[0];
        let modifiedTask = { ...currentTask, done: !currentTask.done}; 

        let clonedArray = this.state.tasks.map( t => {
            if (t.id != taskId) {
                return t;
            } else {
                return modifiedTask;
            }
        })
        this.setState({
            'tasks': clonedArray
        })
    }

    deleteTask = (taskId) => {
        // get the index of the task that we want to delete
        let indexToDelete = this.state.tasks.findIndex( t => t.id == taskId);
        let clonedArray = [
            ...this.state.tasks.slice(0, indexToDelete),
            ...this.state.tasks.slice(indexToDelete+1)
        ]
        this.setState({
            'tasks': clonedArray
        })

    }

    render() {
        return(
            <React.Fragment>
                <h1>Todo List</h1>
                <div>           
                    <label>Name:</label>         
                    <input type="text" 
                           name="newTaskName" 
                           value={this.state.newTaskName}
                           onChange={this.updateTaskName}
                    />
                </div>
                <div>
                    <label>Due Date:</label>
                    <input type="date"
                           name="newDueDate"
                           value = {this.state.newDueDate}
                           onChange={this.updateDueDate}
                    /> 
                </div>
                <button onClick={this.addNewTask}>Add New Task</button>

                <ul>
                    {
                        this.state.tasks.map( t => (
                            <li>
                                {t.description}
                                <input type="checkbox" 
                                    value={t.done} 
                                    checked={t.done}
                                    onChange={()=>{
                                        this.checkTaskV2(t.id)
                                    }}/>
                                    <button onClick={()=>{
                                        this.deleteTask(t.id);
                                    }}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </React.Fragment>
        )
    }
}