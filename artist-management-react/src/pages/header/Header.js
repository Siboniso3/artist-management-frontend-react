import Container from "react-bootstrap/Container"
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from "react-bootstrap/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav"
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // const [show, setShow] = useState(false);



    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container >
                    {/* <Button variant="primary" onClick={handleShow}>
                        Launch
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas> */}
                    <Navbar.Brand to="/">
                        <Nav.Link as={Link} to="/" className="nav-link">
                            ManagementMe
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">
                            Artists
                        </Nav.Link>
                        <Nav.Link as={Link} to="/artist" className="nav-link">
                            Create Artist
                        </Nav.Link>
                        {/* <Nav.Link as={Link} to="/user" className="nav-link">
                            User
                        </Nav.Link> */}
                    </Navbar>
                    <Navbar.Brand to="/">
                        <Button variant="primary" as={Link} to='/login' onClick={''}>
                            Log in
                        </Button> |
                        <Button variant="primary" as={Link} to='/user' onClick={''}>
                            Sign Up
                        </Button>
                    </Navbar.Brand>
                </Container>
            </Navbar >
        </>
    )
}
export default Header;