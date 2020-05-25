import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Footer } from "../../components/Footer";
import {Form, Container, Button} from "react-bootstrap";

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
      backgroundImage: 'url(assets/img/hello.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
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
        <Container>

        </Container>
        <Footer />
      </div>
    );
  }
}


export default About;