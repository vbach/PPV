import React from "react"
import Button from 'react-bootstrap/Button'

class CurrentMovies extends React.Component {

    constructor() {
        super()
        this.state = {
            currentMovies: []
        }
    }

    componentDidMount() {
        const url = "https://api.themoviedb.org/3/movie/popular?api_key=c9eb92bd013f0908283e7d5956dfc4a5&language=en-US&page=1";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    currentMovies: data.results
                })
                console.log(this.state.currentMovies)
            })
    }

    render() {
        // Image URL
        const url = "https://image.tmdb.org/t/p/w500/";
        return (
            <div>
                <h1>Current Movies</h1>
                {this.state.currentMovies.map((item, key) =>
                    <div>
                        <img key={item.id} src={url + item.poster_path} alt="Movie" />

                        <h2 key={item.id}>{item.title}</h2>
                        <p>{item.overview}</p>
                        <Button variant="outline-info" href="#" size="lg">Read More</Button>
                    </div>
                )}

            </div>
        )
    }
}

export default CurrentMovies