
   
import React from 'react'

export default function AddNew(props){
    return <React.Fragment>
        <h1>Add New Recipe</h1>
        <div>
            <label>Title</label>
            <input type="text" name="newTitle"
                className="form-control"
                value={props.newTitle}
                onChange={props.updateField}/>
        </div>
        <div>
            <label>Ingredients</label>
            <input type="text" 
                   name="newIngredients"
                   className="form-control"
                   value={props.newIngredients}
                   onChange={props.updateField}
            />
        </div>
        <button onClick={props.addNew} className="btn btn-primary btn-sm my-3">Create Recipe</button>

    </React.Fragment>
}