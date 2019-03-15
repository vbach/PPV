

import React from "react"
import { Redirect, BrowserRouter as Link, NavLink } from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap"

import Search from "./Search"

const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "c9eb92bd013f0908283e7d5956dfc4a5"

class Header extends React.Component {

    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        fetch(`${API_URL}?api_key=${API_KEY}&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => this.setState({ results: data.results }));

    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 2) {
                if (this.state.query.length % 3 === 0) {

                    this.getInfo()
                }
            }
        })
    }
    render() {
        return (
            <div>


                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Movie App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" ref={input => this.search = input} onChange={this.handleInputChange} />
                            <Button variant="outline-success" >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Search results={this.state.results} />

            </div>
        )
    }
}

export default Header