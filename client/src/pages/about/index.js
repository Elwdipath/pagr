import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Footer } from "../../components/Footer";
import {Card, Container, Row, Col } from "react-bootstrap";

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
        <Container className="mt-3 text-center">
          <h1>Meet the Team!</h1>
          <Row className="mt-3 justify-center">
          <Col sm={12} md={3} className='text-center m-4'>
              <Card style={{ width: '18rem', height: '32rem' }}>
                <Card.Img variant="top" src="assets/img/jordan.png" style={{height: '200px'}} />
                <Card.Body>
                  <Card.Title>Jordan Kaiser</Card.Title>
                  <Card.Text>
                    Jordan was a great project lead. He made sure we stayed on course. If there was a obstacle he helped us work through it. He has a strong head for front-end or back-end problem solving.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="https://github.com/Elwdipath">GitHub</Card.Link>
                  <Card.Link href="https://www.linkedin.com/in/jordan-kaiser-6332666/">LinkedIn</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} className='text-center m-4'>
              <Card style={{ width: '18rem', height: '32rem' }}>
                <Card.Img variant="top" src="assets/img/branden.jpg" style={{height: '200px'}} />
                <Card.Body>
                  <Card.Title>Branden Patten</Card.Title>
                  <Card.Text>
                    Branden is a back-end wizard. He was repsonsible for giving us a solid backend foundation. He worked two jobs and still managed to get us setup ahead of schedule. We could not have done this project without him.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="https://github.com/pattenbranden">GitHub</Card.Link>
                  <Card.Link href="https://www.linkedin.com/in/branden-patten/">LinkedIn</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} className='text-center m-4'>
              <Card style={{ width: '18rem', height: '32rem' }}>
                <Card.Img variant="top" src="assets/img/robert.jpg" style={{height: '200px'}} />
                <Card.Body>
                  <Card.Title>Robert Finkley</Card.Title>
                  <Card.Text>
                    Robert handled the front-end build. He learned more about React modals than he ever wanted to learn. 
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="https://github.com/rfinkley">GitHub</Card.Link>
                  <Card.Link href="https://www.linkedin.com/in/robert-finkley-a0252517/">LinkedIn</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}


export default About;