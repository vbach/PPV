import React from "react"
import Button from 'react-bootstrap/Button'

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

        const url = "https://image.tmdb.org/t/p/w200/";
        return (
            <div>
                <h1>Top Movies</h1>
                {this.state.topMovies.map((item, key) =>
                    <div key={item.id}>


                        <img src={url + item.poster_path} alt="Movie" key={item.id} className="float: left;" />

                        <h2 key={item.id}>{item.title}</h2>
                        <p key={item.id}>{item.overview}</p>
                        <Button variant="outline-info" href="#" size="lg" key={item.id}>Read More</Button>

                    </div>
                )}

            </div>
        )
    }
}

export default TopMovies