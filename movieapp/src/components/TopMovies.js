import React from "react"

class TopMovies extends React.Component {

    constructor() {
        super()
        this.state = {
            topMovies: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/trending/all/day?api_key=c9eb92bd013f0908283e7d5956dfc4a5")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    topMovies: data.results
                })
                console.log(this.state.topMovies)
            })
    }

    handleClick() {
        alert('Clicked.')
    }
    render() {
        return (
            <div>
                <h1>Top Movies</h1>
                {this.state.topMovies.map((item, key) =>
                    <div>
                        <h2 key={item.id}>{item.title}</h2>
                        <p>{item.overview}</p>
                        <button onClick={() => this.handleClick(item.id)}>Read More</button>
                    </div>
                )}

            </div>
        )
    }
}

export default TopMovies