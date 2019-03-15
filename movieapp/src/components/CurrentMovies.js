import React from "react"
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

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
        const url = "https://image.tmdb.org/t/p/w200/";
        return (
            <div className="row">

                <div className="col-12">
                    <h1>Current Movies</h1>
                </div>
                {this.state.currentMovies.map((item, key) =>
                    <div className="col-4">
                        <img key={item.id} src={url + item.poster_path} alt="Movie" />

                        <h3 key={item.id}>{item.title}</h3>
                        <p key={item.id}>{item.overview}</p>
                        <Button variant="outline-info" href="#" size="sm" key={item.id}><Link results={item} to={{ pathname: '/Movie', state: { results: item } }}>Read More</Link></Button>
                    </div>
                )}
            </div>
        )
    }
}

export default CurrentMovies