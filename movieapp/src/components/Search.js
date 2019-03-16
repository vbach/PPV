import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const Search = (props) => {

    const options = props.results.map(r => (


        <Card key={r.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src='' />
            <Card.Body>
                <Card.Title>{r.title}</Card.Title>
                <Card.Text>
                    {r.overview}
                </Card.Text>
                <Button
                    variant="outline-info"
                    onClick={() => {
                        document.getElementById("search").classList.add("hide")
                    }}>
                    <Link
                        results={r}
                        to={{
                            pathname: '/Movie',
                            state: { results: r }
                        }}>
                        Read More
                        </Link>
                </Button>
            </Card.Body>
        </Card>


    ))
    return <div className="row" id="search">{options}</div>
}

export default Search