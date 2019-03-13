import React from "react"

class MovieView extends React.Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            movieInfo: []
        }
    }
    render() {
        return (
            <div>
                <h1>Movie View</h1>
                <p>Description</p>
                <ul>
                    <li>Genre</li>
                    <li>Rating</li>
                    <li>Duration</li>
                </ul>
                <p>Related movies</p>
            </div>
        )
    }
}

export default MovieView