import React from 'react'

export default function Listing(props) {
    return <React.Fragment>
        <h1>All Recipes</h1>
        {
            props.recipes.map(recipe => <React.Fragment key={recipe._id}>
                <div className="card my-3">
                    <div className="card-body">
                        <h3 className="card-title">{recipe.title}</h3>
                        <h4>Ingredients</h4>
                        <ul>
                            {
                            recipe.ingredients.map(eachIngredient => 
                                <li key={eachIngredient}>{eachIngredient}</li>
                                )
                            }
                        </ul>

                    </div>
                </div>

            </React.Fragment>)
        }
    </React.Fragment>

}