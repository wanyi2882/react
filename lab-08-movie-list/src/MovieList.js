import React from 'react'

export default class MovieList extends React.Component {
    state = {
        // minimally should have at least three sample data for testing
        // after we are done with testing we will delete the sample data
        'movies': [
            {
                '_id': 1,
                'title': "Lord of the Rings",
                'genre': "fantasy",
                'themes': ['heroic', 'epic'],
                'summary': "qwerty"
            },
            {
                '_id': 2,
                'title': "The Return on the Jedi",
                'genre': "science-fiction",
                'themes': ['epic', 'heroic'],
                'summary': "qwery1"
            },
            {
                '_id': 3,
                'title': "abc",
                'genre': "mystery",
                'themes': ['dark', 'political', 'epic'],
                'summary': "qwerty2"
            }
        ],
        newMovieTitle: "",
        newMovieGenre: "",
        newMovieThemes: [],
        newMovieSummary:"",
        movieBeingEdited:{},
        modifiedMovieTitle: "",
        modifiedMovieGenre: "",
        modifiedMovieThemes: "",
        modifiedMovieSummary: ""
    }

    //update form field for text input type and radio buttons
    //remember to use arrow functions for event handlers

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    //update checkboxes array
    updateMovieCheckboxes = (evt) => {
        if (this.state.newMovieThemes.includes(evt.target.value)){
            let indexToRemove = this.state.newMovieThemes.indexOf(evt.target.value)
            let clone = [ ...this.state.newMovieThemes.slice(0, indexToRemove), ...this.state.newMovieThemes.slice(indexToRemove+1)]
            this.setState({
                newMovieThemes:clone
            })
        } else {
        let clone = [...this.state.newMovieThemes, evt.target.value]
        this.setState({
            newMovieThemes: clone
        })
        }
    }

    //display all movies
    displayMovies(){
        let movieJSX = []
        for (let movie of this.state.movies){

            //check if the movie that we are displaying is not the one being edited
            if(movie._id != this.state.movieBeingEdited._id) {
                let eachMovieJSX = (<React.Fragment key={movie._id}>
                <div className="card my-3" style={{width: "18rem"}}>                  
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.summary}</p>
                        <div>
                            <p>genre: {movie.genre}</p>
                            <p>themes: {movie.themes.join(", ")}</p>
                        </div>
                        <button className="btn btn-primary btn-sm" 
                        onClick={()=>{this.beginEditMovie(movie)}}>Edit</button>
                        <button className="btn btn-danger btn-sm mx-1" 
                        onClick={()=>{this.deleteMovie(movie)}}>Delete</button>
                    </div>
                </div>
            </React.Fragment>)

            movieJSX.push(eachMovieJSX) 
            } else {
                let eachMovieJSX = this.displayEditForm();
                movieJSX.push(eachMovieJSX);
            }
        }
        return movieJSX
    }
    
    //Display Add new movie form
    displayAddForm() {
        return (<React.Fragment>
            <div>
                <label className="form-label">Movie:</label>
                <input type="text" name="newMovieTitle" className="form-control" 
                value={this.state.newMovieTitle} onChange={this.updateFormField}/>
            </div>

            <div>
                <label className="form-label">Summary:</label>
                <textarea name="newMovieSummary"
                 className="form-control"
                 value={this.state.newMovieSummary}
                 onChange={this.updateFormField}></textarea>
            </div>

            <div>
                <label className="form-label">Genre:</label>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="radio" value="fantasy" 
                    id="genre-fantasy" name="newMovieGenre" onChange={this.updateFormField}
                    checked={this.state.newMovieGenre == "fantasy"}/>
                    <label className="form-check-label" for="genre-fantasy">
                        Fantasy
                    </label>
                </div>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="radio" value="science-fic" 
                    id="genre-science-fic" name="newMovieGenre" onChange={this.updateFormField}
                    checked={this.state.newMovieGenre == "science-fic"}/>
                    <label className="form-check-label" for="genre-science-fic">
                        Science Fiction
                    </label>
                </div>
                <div className="form-check-inline">
                    <input className="form-check-input mx-1" type="radio" value="horror" 
                    id="genre-horror" name="newMovieGenre" onChange={this.updateFormField}
                    checked={this.state.newMovieGenre == "horror"}/>
                    <label className="form-check-label" for="genre-horror">
                        Horror
                    </label>
                </div>
            </div>
            <div>
                <label className="form-label">Themes:</label>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="checkbox" value="heroic" 
                    id="theme-heroic" name="newMovieThemes" onChange={this.updateMovieCheckboxes} checked={this.state.newMovieThemes.includes('heroic')} />
                    <label className="form-check-label" for="theme-heroic">
                        Heroic
                    </label>
                </div>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="checkbox" value="dark" 
                    id="theme-dark" name="newMovieThemes" onChange={this.updateMovieCheckboxes} checked={this.state.newMovieThemes.includes('dark')}/>
                    <label className="form-check-label" for="theme-dark">
                        Dark
                    </label>
                </div>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="checkbox" value="epic" 
                    id="genre-epic" name="newMovieThemes" onChange={this.updateMovieCheckboxes} checked={this.state.newMovieThemes.includes('epic')}/>
                    <label className="form-check-label" for="theme-epic">
                        Epic
                    </label>
                </div>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="checkbox" value="political" 
                    id="genre-political" name="newMovieThemes" onChange={this.updateMovieCheckboxes} checked={this.state.newMovieThemes.includes('political')}/>
                    <label className="form-check-label" for="theme-polticial">
                        Political
                    </label>
                </div>
            </div>
            <button className="btn btn-success" onClick={this.createMovie}>Add Movie</button>
        </React.Fragment>)
    }

    //Edit existing movie form
    displayEditForm() {
        return (<React.Fragment>
            <div>
                <label className="form-label">Movie:</label>
                <input type="text" name="modifiedMovieTitle" className="form-control" 
                value={this.state.modifiedMovieTitle} onChange={this.updateFormField} />
            </div>
            <div>
                <label className="form-label">Summary:</label>
                <textarea name="modifiedMovieSummary"
                    className="form-control"
                    value={this.state.modifiedMovieSummary}
                    onChange={this.updateFormField}></textarea>
            </div>

            <div>
                <label className="form-label">Genre:</label>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="radio" value="fantasy" 
                    id="genre-fantasy" name="modifiedMovieGenre" 
                    onChange={this.updateFormField} 
                    checked={this.state.modifiedMovieGenre == 'fantasy'} />
                    <label className="form-check-label" htmlFor="genre-fantasy">
                        Fantasy
                    </label>
                </div>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="radio" value="science-fic" 
                    id="genre-science-fic" name="modifiedMovieGenre"
                    onChange={this.updateFormField} 
                    checked={this.state.modifiedMovieGenre == 'science-fic'} />
                    <label className="form-check-label" htmlFor="genre-science-fic">
                        Science Fiction
                    </label>
                </div>
                <div className="form-check-inline">
                    <input className="form-check-input mx-1" type="radio" value="horror" 
                    id="genre-horror" name="modifiedMovieGenre"
                    onChange={this.updateFormField} 
                    checked={this.state.modifiedMovieGenre == 'horror'} />
                    <label className="form-check-label" htmlFor="genre-horror">
                        Horror
                    </label>
                </div>
            </div>
            <div>
                <label className="form-label">Themes:</label>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="checkbox" value="heroic" 
                    id="theme-heroic" name="modifiedMovieThemes"
                    onChange={this.updateEditMovieCheckboxes} 
                    checked={this.state.modifiedMovieThemes.includes('heroic')} />
                    <label className="form-check-label" for="theme-heroic">
                        Heroic
                    </label>
                </div>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="checkbox" value="dark" 
                    id="theme-dark" name="modifiedMovieThemes"
                    onChange={this.updateEditMovieCheckboxes} 
                    checked={this.state.modifiedMovieThemes.includes('dark')} />
                    <label className="form-check-label" for="theme-dark">
                        Dark
                    </label>
                </div>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="checkbox" value="epic" 
                    id="genre-epic" name="modifiedMovieThemes" 
                    onChange={this.updateEditMovieCheckboxes} 
                    checked={this.state.modifiedMovieThemes.includes('epic')} />
                    <label className="form-check-label" for="theme-epic">
                        Epic
                    </label>
                </div>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="checkbox" value="political" 
                    id="genre-political" name="modifiedMovieThemes" 
                    onChange={this.updateEditMovieCheckboxes} 
                    checked={this.state.modifiedMovieThemes.includes('political')} />
                    <label className="form-check-label" for="theme-polticial">
                        Political
                    </label>
                </div>
            </div>
            <button className="btn btn-success" onClick={this.updateMovie}>Confirm</button>
        </React.Fragment>)
    }

    //Begin edit to amend states
    beginEditMovie(movie) {
        this.setState({
            'movieBeingEdited': movie,
            'modifiedMovieTitle': movie.title,
            'modifiedMovieSummary': movie.summary,
            'modifiedMovieGenre': movie.genre,
            'modifiedMovieThemes': movie.themes
        })
    }

    //Edit update movie checkboxes array
    updateEditMovieCheckboxes = (evt) => {
        if (this.state.modifiedMovieThemes.includes(evt.target.value)){
            let indexToRemove = this.state.modifiedMovieThemes.indexOf(evt.target.value)
            let clone = [ ...this.state.modifiedMovieThemes.slice(0, indexToRemove), 
                ...this.state.modifiedMovieThemes.slice(indexToRemove+1)]
            this.setState({
                modifiedMovieThemes:clone
            })
        } else {
        let clone = [...this.state.modifiedMovieThemes, evt.target.value]
        this.setState({
            modifiedMovieThemes: clone
        })
        }
    }

    //update movie
    updateMovie = () => {

        //create a new movie object 

        let clonedMovie = {
            '_id': this.state.movieBeingEdited._id,
            'title': this.state.modifiedMovieTitle,
            'genre': this.state.modifiedMovieGenre,
            'summary': this.state.modifiedMovieSummary,
            'themes': this.state.modifiedMovieThemes
        }

        let indexToReplace = this.state.movies.findIndex(eachMovie => 
            eachMovie._id == clonedMovie._id)
        // 1. clone the array from the state        
        // 2. modify the cloned array
        // 3. replace the original array with the clone array
        let clonedMovies = [...this.state.movies.slice(0, indexToReplace), clonedMovie,
                           ...this.state.movies.slice(indexToReplace+1)]
        this.setState({
            'movies': clonedMovies,
            'movieBeingEdited': {}

        })
    }

    // create new movie
    createMovie = () => {
        let newMovie = {
            "_id": Math.floor(Math.random() * 10000 + 9999),
            'title': this.state.newMovieTitle,
            'summary': this.state.newMovieSummary,
            'genre': this.state.newMovieGenre,
            'themes': this.state.newMovieThemes
            }
    
        // clone, update the original array, replace the original array with the clone
        this.setState({
            'movies' : [...this.state.movies, newMovie]
        })
    }

    // delete movie
    deleteMovie = (movieToDelete) => {
        // 1. find the index of the movie we want to delete
        let indexToRemove = this.state.movies.findIndex( movie => movie._id == movieToDelete._id);
   
        // 2. clone the original array
        // update the array
        // replace the array into the state
        let clonedArray = [
            ...this.state.movies.slice(0, indexToRemove),
            ...this.state.movies.slice(indexToRemove+1)
        ]

        this.setState({
            'movies': clonedArray
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Add a movie</h1>
                {this.displayAddForm()}

                <h1>Movies List</h1>
                {this.displayMovies()}
        </React.Fragment>
        )
    }
}