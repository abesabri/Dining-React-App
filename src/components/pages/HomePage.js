import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Thumbnail } from "react-bootstrap";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1 className="foodbanner">Dining Services</h1>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/banner.png" className="bannerimg" />
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Thumbnail src="assets/menu.png" alt="242x200">
              <Link to="/Menu">Menu of the week</Link>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Thumbnail src="assets/participants.jpg" alt="242x200">
              <Link to="/Participants">Lunch Group Participants</Link>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Thumbnail src="assets/tasks.png" alt="242x200">
              <Link to="/Tasks">Tasks Assigned</Link>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomePage;
