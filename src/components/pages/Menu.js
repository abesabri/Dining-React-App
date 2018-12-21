import React, { Component } from "react";
import { Jumbotron, Grid, Row, Col, Image } from "react-bootstrap";
import Dish from "../BasicForms/Dish";
import DishForm from "../BasicInputForms/DishForm";
import Cook from "../BasicForms/Cook";
import CookForm from "../BasicInputForms/CookForm";
import Person1 from "../BasicForms/Person1";
import Person1Form from "../BasicInputForms/Person1Form";
import Person2 from "../BasicForms/Person2";
import Person2Form from "../BasicInputForms/Person2Form";
import { DB_CONFIG } from "../Config/config";
import firebase from "firebase/app";
import "firebase/database";
import "./Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.addDish = this.addDish.bind(this);
    this.removeDish = this.removeDish.bind(this);
    this.addCook = this.addCook.bind(this);
    this.removeCook = this.removeCook.bind(this);
    this.addPerson1 = this.addPerson1.bind(this);
    this.removePerson1 = this.removePerson1.bind(this);
    this.addPerson2 = this.addPerson2.bind(this);
    this.removePerson2 = this.removePerson2.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app
      .database()
      .ref()
      .child("menu");

    this.database2 = this.app
      .database()
      .ref()
      .child("cooks");

    this.database3 = this.app
      .database()
      .ref()
      .child("person1");

    this.database4 = this.app
      .database()
      .ref()
      .child("person2");

    this.state = {
      dishes: [],
      cooks: [],
      person1s: [],
      person2s: []
    };
  }

  componentWillMount() {
    const previousDish = this.state.dishes;

    // DataSnapshot
    this.database.on("child_added", snap => {
      previousDish.push({
        id: snap.key,
        dishContent: snap.val().dishContent
      });

      this.setState({
        dishes: previousDish
      });
    });

    this.database.on("child_removed", snap => {
      for (var i = 0; i < previousDish.length; i++) {
        if (previousDish[i].id === snap.key) {
          previousDish.splice(i, 1);
        }
      }

      this.setState({
        dishes: previousDish
      });
    });

    const previousCooks = this.state.cooks;

    this.database2.on("child_added", snap => {
      previousCooks.push({
        id: snap.key,
        cookContent: snap.val().cookContent
      });

      this.setState({
        cooks: previousCooks
      });
    });

    this.database2.on("child_removed", snap => {
      for (var j = 0; j < previousCooks.length; j++) {
        if (previousCooks[j].id === snap.key) {
          previousCooks.splice(j, 1);
        }
      }

      this.setState({
        cooks: previousCooks
      });
    });

    const previousPerson1 = this.state.person1s;

    // DataSnapshot
    this.database3.on("child_added", snap => {
      previousPerson1.push({
        id: snap.key,
        person1Content: snap.val().person1Content
      });

      this.setState({
        person1s: previousPerson1
      });
    });

    this.database3.on("child_removed", snap => {
      for (var i = 0; i < previousPerson1.length; i++) {
        if (previousPerson1[i].id === snap.key) {
          previousPerson1.splice(i, 1);
        }
      }

      this.setState({
        person1s: previousPerson1
      });
    });

    const previousPerson2 = this.state.person2s;

    // DataSnapshot
    this.database4.on("child_added", snap => {
      previousPerson2.push({
        id: snap.key,
        person2Content: snap.val().person2Content
      });

      this.setState({
        person2s: previousPerson2
      });
    });

    this.database4.on("child_removed", snap => {
      for (var i = 0; i < previousPerson2.length; i++) {
        if (previousPerson2[i].id === snap.key) {
          previousPerson2.splice(i, 1);
        }
      }

      this.setState({
        person2s: previousPerson2
      });
    });
  }

  addDish(dish) {
    this.database.push().set({ dishContent: dish });
  }

  removeDish(dishId) {
    console.log("from the parent: " + dishId);
    this.database.child(dishId).remove();
  }

  addCook(cook) {
    this.database2.push().set({ cookContent: cook });
  }

  removeCook(cookId) {
    console.log("from the parent: " + cookId);
    this.database2.child(cookId).remove();
  }

  addPerson1(person1) {
    this.database3.push().set({ person1Content: person1 });
  }

  removePerson1(person1Id) {
    console.log("from the parent: " + person1Id);
    this.database3.child(person1Id).remove();
  }

  addPerson2(person2) {
    this.database4.push().set({ person2Content: person2 });
  }

  removePerson2(person2Id) {
    console.log("from the parent: " + person2Id);
    this.database4.child(person2Id).remove();
  }

  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1 className="foodbanner">Menu of the week</h1>
          <date />
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={2} className="person-wrapper">
            <Image
              src="assets/banner.png"
              className="bannerimg"
              style={{
                width: 200
              }}
            />
          </Col>
          <Col xs={12} sm={2} className="person-wrapper mycontent-left">
            <div className="menucontent">
              <h3>Monday</h3>
              <p>Gericht: </p>
              <div className="notesWrapper">
                <div className="notesBody">
                  {this.state.dishes.map(dish => {
                    return (
                      <Dish
                        dishContent={dish.dishContent}
                        dishId={dish.id}
                        key={dish.id}
                        removeDish={this.removeDish}
                      />
                    );
                  })}
                </div>
                <div className="notesFooter">
                  <DishForm addDish={this.addDish} />
                </div>
              </div>
              <h4>Kochen: </h4>
              <div className="notesWrapper">
                <div className="notesBody">
                  {this.state.cooks.map(cook => {
                    return (
                      <Cook
                        cookContent={cook.cookContent}
                        cookId={cook.id}
                        key={cook.id}
                        removeCook={this.removeCook}
                      />
                    );
                  })}
                </div>
                <div className="notesFooter">
                  <CookForm addCook={this.addCook} />
                </div>
              </div>
            </div>
            <h5>Aüfraumen1: </h5>
            <div className="notesWrapper">
              <div className="notesBody">
                {this.state.person1s.map(person1 => {
                  return (
                    <Person1
                      person1Content={person1.person1Content}
                      person1Id={person1.id}
                      key={person1.id}
                      removePerson1={this.removePerson1}
                    />
                  );
                })}
              </div>
              <div className="notesFooter">
                <Person1Form addPerson1={this.addPerson1} />
              </div>
            </div>
            <h5>Aüfraumen2: </h5>
            <div className="notesWrapper">
              <div className="notesBody">
                {this.state.person2s.map(person2 => {
                  return (
                    <Person2
                      person2Content={person2.person2Content}
                      person2Id={person2.id}
                      key={person2.id}
                      removePerson2={this.removePerson2}
                    />
                  );
                })}
              </div>
              <div className="notesFooter">
                <Person2Form addPerson2={this.addPerson2} />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={2} className="person-wrapper mycontent-left">
            <div className="menucontent">
              <h3>Tuesday</h3>
              <p>Gericht: </p>
              <div className="notesWrapper">
                <div className="notesBody">
                  {this.state.dishes.map(dish => {
                    return (
                      <Dish
                        dishContent={dish.dishContent}
                        dishId={dish.id}
                        key={dish.id}
                        removeDish={this.removeDish}
                      />
                    );
                  })}
                </div>
                <div className="notesFooter">
                  <DishForm addDish={this.addDish} />
                </div>
              </div>
              <h4>Kochen: </h4>
              <div className="notesWrapper">
                <div className="notesBody">
                  {this.state.cooks.map(cook => {
                    return (
                      <Cook
                        cookContent={cook.cookContent}
                        cookId={cook.id}
                        key={cook.id}
                        removeCook={this.removeCook}
                      />
                    );
                  })}
                </div>
                <div className="notesFooter">
                  <CookForm addCook={this.addCook} />
                </div>
              </div>
            </div>
            <h5>Aüfraumen1: </h5>
            <div className="notesWrapper">
              <div className="notesBody">
                {this.state.person1s.map(person1 => {
                  return (
                    <Person1
                      person1Content={person1.person1Content}
                      person1Id={person1.id}
                      key={person1.id}
                      removePerson1={this.removePerson1}
                    />
                  );
                })}
              </div>
              <div className="notesFooter">
                <Person1Form addPerson1={this.addPerson1} />
              </div>
            </div>
            <h5>Aüfraumen2: </h5>
            <div className="notesWrapper">
              <div className="notesBody">
                {this.state.person2s.map(person2 => {
                  return (
                    <Person2
                      person2Content={person2.person2Content}
                      person2Id={person2.id}
                      key={person2.id}
                      removePerson2={this.removePerson2}
                    />
                  );
                })}
              </div>
              <div className="notesFooter">
                <Person2Form addPerson2={this.addPerson2} />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={2} className="person-wrapper mycontent-left">
            <div className="menucontent">
              <h3>Wednesday</h3>
              <p>Gericht: </p>
              <div className="notesWrapper">
                <div className="notesBody">
                  {this.state.dishes.map(dish => {
                    return (
                      <Dish
                        dishContent={dish.dishContent}
                        dishId={dish.id}
                        key={dish.id}
                        removeDish={this.removeDish}
                      />
                    );
                  })}
                </div>
                <div className="notesFooter">
                  <DishForm addDish={this.addDish} />
                </div>
              </div>
              <h4>Kochen: </h4>
              <div className="notesWrapper">
                <div className="notesBody">
                  {this.state.cooks.map(cook => {
                    return (
                      <Cook
                        cookContent={cook.cookContent}
                        cookId={cook.id}
                        key={cook.id}
                        removeCook={this.removeCook}
                      />
                    );
                  })}
                </div>
                <div className="notesFooter">
                  <CookForm addCook={this.addCook} />
                </div>
              </div>
            </div>
            <h5>Aüfraumen1: </h5>
            <div className="notesWrapper">
              <div className="notesBody">
                {this.state.person1s.map(person1 => {
                  return (
                    <Person1
                      person1Content={person1.person1Content}
                      person1Id={person1.id}
                      key={person1.id}
                      removePerson1={this.removePerson1}
                    />
                  );
                })}
              </div>
              <div className="notesFooter">
                <Person1Form addPerson1={this.addPerson1} />
              </div>
            </div>
            <h5>Aüfraumen2: </h5>
            <div className="notesWrapper">
              <div className="notesBody">
                {this.state.person2s.map(person2 => {
                  return (
                    <Person2
                      person2Content={person2.person2Content}
                      person2Id={person2.id}
                      key={person2.id}
                      removePerson2={this.removePerson2}
                    />
                  );
                })}
              </div>
              <div className="notesFooter">
                <Person2Form addPerson2={this.addPerson2} />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={2} className="person-wrapper mycontent-left">
            <div className="menucontent">
              <h3>Thursday</h3>
              <p>Gericht: </p>
              <div className="notesWrapper">
                <div className="notesBody">
                  {this.state.dishes.map(dish => {
                    return (
                      <Dish
                        dishContent={dish.dishContent}
                        dishId={dish.id}
                        key={dish.id}
                        removeDish={this.removeDish}
                      />
                    );
                  })}
                </div>
                <div className="notesFooter">
                  <DishForm addDish={this.addDish} />
                </div>
              </div>
              <h4>Kochen: </h4>
              <div className="notesWrapper">
                <div className="notesBody">
                  {this.state.cooks.map(cook => {
                    return (
                      <Cook
                        cookContent={cook.cookContent}
                        cookId={cook.id}
                        key={cook.id}
                        removeCook={this.removeCook}
                      />
                    );
                  })}
                </div>
                <div className="notesFooter">
                  <CookForm addCook={this.addCook} />
                </div>
              </div>
            </div>
            <h5>Aüfraumen1: </h5>
            <div className="notesWrapper">
              <div className="notesBody">
                {this.state.person1s.map(person1 => {
                  return (
                    <Person1
                      person1Content={person1.person1Content}
                      person1Id={person1.id}
                      key={person1.id}
                      removePerson1={this.removePerson1}
                    />
                  );
                })}
              </div>
              <div className="notesFooter">
                <Person1Form addPerson1={this.addPerson1} />
              </div>
            </div>
            <h5>Aüfraumen2: </h5>
            <div className="notesWrapper">
              <div className="notesBody">
                {this.state.person2s.map(person2 => {
                  return (
                    <Person2
                      person2Content={person2.person2Content}
                      person2Id={person2.id}
                      key={person2.id}
                      removePerson2={this.removePerson2}
                    />
                  );
                })}
              </div>
              <div className="notesFooter">
                <Person2Form addPerson2={this.addPerson2} />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={2} className="person-wrapper mycontent-left">
            <div className="menucontent">
              <h3>Friday</h3>
              <p>Gericht: </p>
              <div className="notesWrapper">
                <div className="notesBody">
                  {this.state.dishes.map(dish => {
                    return (
                      <Dish
                        dishContent={dish.dishContent}
                        dishId={dish.id}
                        key={dish.id}
                        removeDish={this.removeDish}
                      />
                    );
                  })}
                </div>
                <div className="notesFooter">
                  <DishForm addDish={this.addDish} />
                </div>
              </div>
              <h4>Kochen: </h4>
              <div className="notesWrapper">
                <div className="notesBody">
                  {this.state.cooks.map(cook => {
                    return (
                      <Cook
                        cookContent={cook.cookContent}
                        cookId={cook.id}
                        key={cook.id}
                        removeCook={this.removeCook}
                      />
                    );
                  })}
                </div>
                <div className="notesFooter">
                  <CookForm addCook={this.addCook} />
                </div>
              </div>
            </div>
            <h5>Aüfraumen1: </h5>
            <div className="notesWrapper">
              <div className="notesBody">
                {this.state.person1s.map(person1 => {
                  return (
                    <Person1
                      person1Content={person1.person1Content}
                      person1Id={person1.id}
                      key={person1.id}
                      removePerson1={this.removePerson1}
                    />
                  );
                })}
              </div>
              <div className="notesFooter">
                <Person1Form addPerson1={this.addPerson1} />
              </div>
            </div>
            <h5>Aüfraumen2: </h5>
            <div className="notesWrapper">
              <div className="notesBody">
                {this.state.person2s.map(person2 => {
                  return (
                    <Person2
                      person2Content={person2.person2Content}
                      person2Id={person2.id}
                      key={person2.id}
                      removePerson2={this.removePerson2}
                    />
                  );
                })}
              </div>
              <div className="notesFooter">
                <Person2Form addPerson2={this.addPerson2} />
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Menu;
