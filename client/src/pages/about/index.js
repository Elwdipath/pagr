import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Footer } from "../../components/Footer";
import {Form, Container, Row, Col } from "react-bootstrap";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email: "",
      message: ""
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {    

    const aboutWrapper = {
      height: '100vh',
      width: '100vw',
    }

    return (
      <div className="wrapper" style={aboutWrapper}>
        <Nav>
          <li className="nav-item">
            <a className="nav-link" href="/signup">Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Log In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact Us</a>
          </li>
        </Nav>
        <Container className="mt-3">
          <h1>Meet the Team!</h1>
          <Row className="mt-3">
            <Col sm={12} md={3}>
              <img src="https://via.placeholder.com/150" alt=""/>
              <h1>Jordan</h1>
              <p>Jordan was a great project lead. He made sure we stayed on course. If there was a obstacle he helped us work through it. He has a strong head for front-end or back-end problem solving.</p>
            </Col>
            <Col sm={12} md={3}>
              <img src="assets/img/branden.jpg" alt="Branden Pic" height="150px" width="150px"/>
              <h1>Branden</h1>
              <p>Branden is a back-end wizard. He was repsonsible for giving us a solid backend foundation. He worked two jobs and still managed to get us setup ahead of schedule. We could not have done this project without him.</p>
            </Col>
            <Col sm={12} md={3}>
            <img src="assets/img/robert.JPG" alt="Robert Pic" height="150px" width="150px"/>
              <h1>Robert</h1>
              <p>Robert handled the front-end build. He learned more about React modals than he ever wanted to learn. </p>
            </Col>
          </Row>

        </Container>
        <Footer />
      </div>
    );
  }
}


export default About;