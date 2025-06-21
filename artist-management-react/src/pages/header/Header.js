import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav"
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand to="/">Artist Management System</Navbar.Brand>
                    <Navbar className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">
                            Artists
                        </Nav.Link>
                        <Nav.Link as={Link} to="/artist" className="nav-link">
                            Create Artist
                        </Nav.Link>
                        <Nav.Link as={Link} to="/user" className="nav-link">
                            User
                        </Nav.Link>
                    </Navbar>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;