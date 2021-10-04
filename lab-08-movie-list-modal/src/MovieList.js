import React from 'react'

export default class MovieList extends React.Component {
    state = {
        // minimally should have three sample data for testing
        // after we are done with test, we will delete the sample data
        'movies': [
            {
                '_id': 1,
                'title': 'The Lord of the Rings', // <-- textbox
                'genre': 'fantasy', // <-- radio or select dropdown
                'themes': ['heroic', 'epic'], // <-- checkboxes,
                'summary': "Two halfings simply walked into Mordor"
            },
            {
                '_id': 2,
                'title': 'The Return of the Jedi',
                'genre': 'science-fic',
                'themes': ['heroic', 'epic'],
                'summary': "They are actually sisters and brothers"
            },
            {
                '_id': 3,
                'title': 'Dune',
                'genre': 'science-fic',
                'themes': ['dark', 'epic', 'political'],
                'summary': "The spice must flow"
            }
        ],
        newMovieTitle: "",
        newMovieGenre: "",
        newMovieThemes: [],
        newMovieSummary: "",
        movieBeingEdited: {},
        display: false
    }

    // update form field for text input type and radio buttons
    // remeber to use arrow functions for event handler
    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    // evt is an event object
    // evt.target is the DOM element that the object takes place on
    // evt.target.name is the 'name' attribute of the DOM element
    updateMovieCheckboxes = (evt) => {
        // check if the value that the user has clicked already exists
        // 1. if exists, then the user is UNCHECKING the box
        // 2. if does not exists, then the user is CHECKING the box

        let arrayToModify = this.state[evt.target.name];

        if (arrayToModify.includes(evt.target.value)) {
            let indexToRemove = arrayToModify.indexOf(evt.target.value);
            let cloned = [...arrayToModify.slice(0, indexToRemove), ...arrayToModify.slice(indexToRemove + 1)];
            this.setState({
                [evt.target.name]: cloned
            })
        } else {
            // clone the array
            let cloned = [...arrayToModify, evt.target.value];
            this.setState({
                [evt.target.name]: cloned
            })
        }
    }

    // display all movies
    displayMovies() {
        let movieJSX = [];
        for (let movie of this.state.movies) {
            // create the JSX for each movie
            // the key is only required for list rendering
            let eachMovieJSX = (<React.Fragment key={movie._id}>
                <div className="card my-3" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.summary}</p>
                        <div>
                            <p>Genre: {movie.genre}</p>
                            <p>Themes: {movie.themes.join(", ")}</p>
                        </div>
                        <button className="btn btn-success btn-sm" onClick={() => {
                            this.beginEditMovie(movie);
                        }}>Edit</button>
                        <button className="btn btn-danger btn-sm mx-1" onClick={() => {
                            this.deleteMovie(movie)
                        }}>Delete</button>
                    </div>
                </div>
            </React.Fragment>)

            // push the JSX into the array
            movieJSX.push(eachMovieJSX);


        }

        return movieJSX;
    }

    // display the form for adding a new movied
    displayForm() {
        return (<React.Fragment>
            <div>
                <label className="form-label">Movie:</label>
                <input type="text" name="newMovieTitle" className="form-control" value={this.state.newMovieTitle} onChange={this.updateFormField} />
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
                    <input className="form-check-input mx-1" type="radio" value="fantasy" id="genre-fantasy" name="newMovieGenre" onChange={this.updateFormField} checked={this.state.newMovieGenre == 'fantasy'} />
                    <label className="form-check-label" htmlFor="genre-fantasy">
                        Fantasy
                    </label>
                </div>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="radio" value="science-fic" id="genre-science-fic" name="newMovieGenre" onChange={this.updateFormField} checked={this.state.newMovieGenre == 'science-fic'} />
                    <label className="form-check-label" htmlFor="genre-science-fic">
                        Science Fiction
                    </label>
                </div>
                <div className="form-check-inline">
                    <input className="form-check-input mx-1" type="radio" value="horror" id="genre-horror" name="newMovieGenre" onChange={this.updateFormField} checked={this.state.newMovieGenre == 'horror'} />
                    <label className="form-check-label" htmlFor="genre-horror">
                        Horror
                    </label>
                </div>
            </div>
            <div>
                <label className="form-label">Themes:</label>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="checkbox" value="heroic" id="theme-heroic" name="newMovieThemes" onChange={this.updateMovieCheckboxes} checked={this.state.newMovieThemes.includes('heroic')} />
                    <label className="form-check-label" for="theme-heroic">
                        Heroic
                    </label>
                </div>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="checkbox" value="dark" id="theme-dark" name="newMovieThemes" onChange={this.updateMovieCheckboxes} checked={this.state.newMovieThemes.includes('dark')} />
                    <label className="form-check-label" for="theme-dark">
                        Dark
                    </label>
                </div>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="checkbox" value="epic" id="genre-epic" name="newMovieThemes" onChange={this.updateMovieCheckboxes} checked={this.state.newMovieThemes.includes('epic')} />
                    <label className="form-check-label" for="theme-epic">
                        Epic
                    </label>
                </div>
                <div className="form-check-inline mx-1">
                    <input className="form-check-input mx-1" type="checkbox" value="political" id="genre-political" name="newMovieThemes" onChange={this.updateMovieCheckboxes} checked={this.state.newMovieThemes.includes('political')} />
                    <label className="form-check-label" for="theme-polticial">
                        Political
                    </label>
                </div>
            </div>           
        </React.Fragment>)
    }

    hideModalBox = () => {
        this.setState({
            'display': false
        })
    }

    displayModalBox() {
        if (this.state.display) {
            return (
                <React.Fragment>
                    <div
                        className="modal show fade"
                        tabIndex="-1"
                        style={{
                            display: "block",
                            backgroundColor: "rgba(0.5, 0.5, 0.5, 0.5)"
                        }}
                    >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={this.hideModalBox}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    {this.displayForm()}
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        onClick={this.hideModalBox}
                                    >
                                        Close
                                    </button>
                                    {
                                        /* if movieBeingEdited._id is not null, is not undefined and is not 0,
                                         then display the button for updating movie, otherwise, display button
                                        for creating a movie */
                                        this.state.movieBeingEdited._id ? 
                                            (
                                                <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={this.updateMovie}
                                                >
                                                Update Movie
                                                </button>
                                            ) : (
                                                <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={this.createMovie}
                                                >
                                                Add New Movie
                                                </button>
                                            )
                                    }
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }

    // store which movie is being edited
    beginEditMovie(movie) {
        this.setState({
            'display': true, // display the modal box
            'movieBeingEdited': movie,
            'newMovieTitle': movie.title,
            'newMovieSummary': movie.summary,
            'newMovieGenre': movie.genre,
            'newMovieThemes': movie.themes
        })
    }

    // save the chnanges and also set that no movie is being edited
    updateMovie = () => {

        // create a new movie object that reflects the updated movie        
        let clonedMovie = {
            '_id': this.state.movieBeingEdited._id,
            'title': this.state.newMovieTitle,
            'genre': this.state.newMovieGenre,
            'summary': this.state.newMovieSummary,
            'themes': this.state.newMovieThemes
        }

        let indexToReplace = this.state.movies.findIndex(eachMovie =>
            eachMovie._id == clonedMovie._id);

        // 1. clone the array from the state        
        // 2. modify the cloned array
        // 3. replace the original array with the clone array
        let clonedMovies = [
            ...this.state.movies.slice(0, indexToReplace),
            clonedMovie,
            ...this.state.movies.slice(indexToReplace + 1)
        ];
        this.setState({
            'movies': clonedMovies,
            'movieBeingEdited': {
                '_id': 0
            },
            'display' : false // to hide the modal box
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
            'movies': [...this.state.movies, newMovie],
            'display': false
        })
    }

    deleteMovie = (movieToDelete) => {
        // 1. find the index of the movie we want to delete
        let indexToRemove = this.state.movies.findIndex(movie => movie._id == movieToDelete._id);

        // 2. clone the original array
        // update the array
        // replace the array into the state
        let clonedArray = [
            ...this.state.movies.slice(0, indexToRemove),
            ...this.state.movies.slice(indexToRemove + 1)
        ]

        this.setState({
            'movies': clonedArray
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Movies List</h1>
                <button onClick={() => {
                    this.setState({
                        'display': true
                    })
                }}>Add new Movie</button>
                {/* as long as the expression is an array of JSX elements,
                    React will perform list rendering */}
                {this.displayMovies()}

                {this.displayModalBox()}
            </React.Fragment>

        )
    }
}