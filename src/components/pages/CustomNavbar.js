import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="https://www.casecheck.io">
              &#9776;
              <img
                alt="logo"
                src="assets/logo.png"
                style={{
                  width: 100,
                  height: 100,
                  marginTop: -60,
                  marginLeft: 30
                }}
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/login" to="/">
              Login
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/signup" to="/">
              SignUp
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
