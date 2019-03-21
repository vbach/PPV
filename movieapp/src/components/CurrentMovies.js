import React from "react"
import { Button, Card } from 'react-bootstrap'
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
                    <h1>Currently In Theater</h1>
                </div>
                {this.state.currentMovies.map((item, key) =>

                    <Card key={item.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={url + item.backdrop_path} alt={item.title} className="current-imgs" />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.overview}
                            </Card.Text>
                            <Link results={item} to={{ pathname: '/Movie', state: { results: item } }}><Button variant="outline-info" className="sm-buttons mt-auto">Read More</Button></Link>
                        </Card.Body>
                    </Card>

                )}
            </div>
        )
    }
}

export default CurrentMovies