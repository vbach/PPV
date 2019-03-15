import React from "react"


const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "c9eb92bd013f0908283e7d5956dfc4a5"

class MovieView extends React.Component {

    // getInfo = () => {
    //     fetch(`${API_URL}?api_key=${API_KEY}&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
    //         .then(response => response.json())
    //         .then(data => this.setState({ results: data.results }));

    // }

    render() {

        const imgUrl = "https://image.tmdb.org/t/p/w500/" + this.props.location.state.results.backdrop_path;
        return (
            <div>
                {console.log(this.props.location.state.results)}
                <img src={imgUrl} alt={this.props.location.state.results.title}></img>
                <h1>{this.props.location.state.results.title}</h1>

            </div>
        )
    }
}

export default MovieView