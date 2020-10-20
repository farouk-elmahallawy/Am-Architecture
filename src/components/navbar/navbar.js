import React from 'react'
import '../../../src/bootstrap.css'
import '../navbar/navbar.css'
import {Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class Navbaricon extends React.Component {
    render(){
        return(
                    <Navbar className="navbar" bg="light" expand="lg">
                        <div className="container">
                    <Link className="logo" to="/About_us">AM <span> Architecture Design Studio</span></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Link className="nav-item" to="/">Home</Link>
                        <Link className="nav-item" to="/About_us">About</Link>
                        <Link className="nav-item" to="/samples">Samples</Link>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                    </Navbar>
        );
    }
}
export default Navbaricon