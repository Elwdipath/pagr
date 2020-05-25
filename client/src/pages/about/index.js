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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab architecto, quaerat deleniti a quisquam amet voluptatibus libero similique cumque consequuntur ea, molestiae minus, illo fugiat praesentium cupiditate modi sapiente non.</p>
            </Col>
            <Col sm={12} md={3}>
              <img src="assets/img/branden.jpg" alt="Branden Pic" height="150px" width="150px"/>
              <h1>Branden</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam harum eveniet minima dolorum accusamus commodi error eius in, ipsam explicabo ea provident, iure cum. Debitis distinctio hic explicabo tempore?</p>
            </Col>
            <Col sm={12} md={3}>
            <img src="assets/img/robert.JPG" alt="Robert Pic" height="150px" width="150px"/>
              <h1>Robert</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse placeat alias vitae aut, maxime repudiandae rem omnis cum fugiat quam? Quisquam sequi culpa exercitationem nisi aspernatur voluptatem expedita ea.
              </p>
            </Col>
          </Row>

        </Container>
        <Footer />
      </div>
    );
  }
}


export default About;