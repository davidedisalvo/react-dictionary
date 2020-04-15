import React, { Component, useContext } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import WordContext from './WordsContext';

 
class TheNav extends Component {
    static contextType = WordContext

    render() { 
        const value = this.context

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                        <Link to="/" className= "nav-link">Home</Link>
                        <Link to="/words" className="nav-link">
                            My Words ({value.favourite.length})
                        </Link>
                    
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default TheNav;