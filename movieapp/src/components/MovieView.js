import React from "react"


const API_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "c9eb92bd013f0908283e7d5956dfc4a5"
let API_ID = "";

class MovieView extends React.Component {

    // Load more button calls api to load movie details api information?
    // Or onClick in search results, loads api to return this information for that movie

    componentDidMount() {

    }
    render() {
        const imgUrl = "https://image.tmdb.org/t/p/w500/" + this.props.location.state.results.backdrop_path;
        return (
            <div>
                <img src={imgUrl} alt={this.props.location.state.results.title}></img>
                <h1>{this.props.location.state.results.title}</h1>

            </div>
        )
    }
}

export default MovieView