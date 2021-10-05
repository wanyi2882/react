import React from 'react'
import AddTask from './AddTask'
import EditTask from './EditTask'
import Task from './Task'

export default class TaskList extends React.Component {
    state = {
        'tasks': [
            {
                '_id': 1,
                'description': "Walk the dog",
                'date_due': '2021-10-02',
                'done': false
            },
            {
                '_id': 2,
                'description': "Water the plants",
                'date_due': '2021-10-03',
                'done': false
            },
            {
                '_id': 3,
                'description': 'Pay the bills',
                'date_due': '2021-10-04',
                'done': false
            }
        ],
        newTaskName: '',
        newTaskDueDate: '',
        modifiedTaskName: '',
        modifiedTaskDateDue: '',
        taskBeingUpdated: {}
    }

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    processAddTask = () => {
        // create a new task logic here

        // 1. clone the original tasks array
        // 2. make changes to the clone
        // 3. replace the original tasks array with clone
        this.setState({
            'tasks': [...this.state.tasks, {
                "_id": Math.floor(Math.random() * 10000 + 9999),
                'description': this.state.newTaskName,
                'date_due': this.state.newTaskDueDate,
                'completed': false
            }]
        })
    }

    processDeleteTask = (taskToDelete) => {
        let indexToRemove = this.state.tasks.findIndex(task => task._id == taskToDelete._id);
        // 1. clone the array
        // 2. modify the array
        // 3. replace the original array in the state
        this.setState({
            'tasks': [
                ...this.state.tasks.slice(0, indexToRemove),
                ...this.state.tasks.slice(indexToRemove + 1)
            ]
        })
    }


    processToggleTask = (task) => {
        // clone the task and make the change
        let clonedTask = { ...task, 'done': !task.done };

        let indexToReplace = this.state.tasks.findIndex(task => task._id == clonedTask._id);

        // 1. clone the original array
        // 2. make changes to the clone
        // 3. replace the original array with the clone in the state
        this.setState({
            'tasks': [
                ...this.state.tasks.slice(0, indexToReplace),
                clonedTask,
                ...this.state.tasks.slice(indexToReplace + 1)
            ]
        })
    }

    processEditTask = (task) => {
        this.setState({
            'taskBeingUpdated': task,
            'modifiedTaskName': task.description,
            'modifiedTaskDateDue': task.date_due
        })
    }

    finalizeUpdateTask = () => {
        // create the modified task object
        let modifiedTask = {
            '_id' : this.state.taskBeingUpdated._id,
            'description': this.state.modifiedTaskName,
            'date_due': this.state.modifiedTaskDateDue,
            'done': this.state.taskBeingUpdated.done
        }

        // clone the array, make change to the clone, replace the original with the clone in the state
        let indexToReplace = this.state.tasks.findIndex( t => t._id == modifiedTask._id);

        this.setState({
            'tasks': [
                ...this.state.tasks.slice(0, indexToReplace),
                modifiedTask,
                ...this.state.tasks.slice(indexToReplace+1)
            ],
            'taskBeingUpdated':{}
        })
    }

    render() {
        return (<React.Fragment>

            {/* Render the add task form */}
            <AddTask
                taskName={this.state.newTaskName}
                dueDate={this.state.newTaskDueDate}
                updateField={this.updateFormField}
                addTask={this.processAddTask}
            />

            {/* Render each task */}
            {this.state.tasks.map((eachTask) => {
                return eachTask._id != this.state.taskBeingUpdated._id ?
                    <Task task={eachTask}
                        key={eachTask._id}
                        delete={this.processDeleteTask}
                        toggleTask={this.processToggleTask}
                        edit={this.processEditTask}
                    /> : (
                        <React.Fragment key={eachTask._id}>
                            <div class="card">
                                <div class="card-body">
                                    <EditTask
                                        taskName={this.state.modifiedTaskName}
                                        dueDate={this.state.modifiedTaskDateDue}
                                        updateField={this.updateFormField}
                                        editTask={this.finalizeUpdateTask} />
                                </div>
                            </div>
                        </React.Fragment>
                    )


            })}

        </React.Fragment>)
    }
}