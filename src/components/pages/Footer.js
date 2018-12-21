import React from "react";
import { Grid, Nav, NavItem } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div className="panel-footer panel-custom">
      <footer>
        <Grid>
          <Nav justified>
            <NavItem eventKey={1}>Privacy policy</NavItem>
            <NavItem eventKey={2} title="Item">
              Terms & Conditions
            </NavItem>
            <NavItem eventKey={3}>Some other link</NavItem>
          </Nav>
          <div className="text-center small copyright">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.casecheck.io"> casecheck GmbH </a>
          </div>
        </Grid>
      </footer>
    </div>
  );
}

export default Footer;
