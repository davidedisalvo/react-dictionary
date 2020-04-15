import React, { Component, useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import WordContext from "./WordsContext";

class TheNav extends Component {
  static contextType = WordContext;

  render() {
    const value = this.context;

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              to="/"
              exact
              activeStyle={{
                fontWeight: "bold",
                color: "#173f5f",
              }}
              className="nav-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/words"
              className="nav-link"
              exact
              activeStyle={{
                fontWeight: "bold",
                color: "#173f5f",
              }}
            >
              My Words ({value.favourite.length})
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TheNav;
