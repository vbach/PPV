import React from "react"

class CurrentMovies extends React.Component {

    constructor() {
        super()
        this.state = {
            currentMovies: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c9eb92bd013f0908283e7d5956dfc4a5&language=en-US&page=1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    currentMovies: data.results
                })
                console.log(this.state.currentMovies)
            })
    }

    render() {
        return (
            <div>
                <h1>Current Movies</h1>
                {this.state.currentMovies.map((item, key) =>
                    <div>
                        <h2 key={item.id}>{item.title}</h2>
                        <p>{item.overview}</p>
                        <button>Read More</button>
                    </div>
                )}

            </div>
        )
    }
}

export default CurrentMovies