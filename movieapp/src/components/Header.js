import React from "react"
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap"
class Header extends React.Component {
    render() {
        return (
            <div>

                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink component={Link} to="/">Home</NavLink>
                            <NavLink component={Link} to="/Movie">Movie View</NavLink>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header