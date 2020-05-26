import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Footer } from "../../components/Footer";
import {Form, Container, Button} from "react-bootstrap";

class ContactUs extends Component {
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
    const contactForm = {
      width: 400,
      padding: "1rem",
      backgroundColor: 'rgba(0, 0, 0, .75)',
      color: '#fff',
      marginTop: '3rem'
    }

    const contactWrapper = {
      height: '100vh',
      width: '100vw',
      backgroundImage: 'url(assets/img/hello.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return (
      <div className="wrapper" style={contactWrapper}>
        <Nav>
          <li className="nav-item">
            <a className="nav-link" href="/signup">Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Log In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About Us</a>
          </li>
        </Nav>
        <Container>
          <Form  style={contactForm}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={this.state.name} onChange={this.handleInputChange} type="text" placeholder="Enter your name"  />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={this.state.email} onChange={this.handleInputChange} type="email" placeholder="Enter your email address"  />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control name="message" value={this.state.message} onChange={this.handleInputChange} as="textarea" rows="4" placeholder="Enter your message"  />
            </Form.Group>
            <Button onClick={e => {alert("Hi")}} type="submit" color="btnPrimary">Send Message</Button>
          </Form>
        </Container>
        <Footer />
      </div>
    );
  }
}


export default ContactUs;