import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Footer } from "../../components/Footer";


class Home extends Component {

  render() {
    const jumbotronText = {
       color: '#000',
       fontFamily: 'Roboto',
       fontWeight: 900,
       fontSize: '3rem',
    }
    return (
      <div className="wrapper">
        <Nav>
          <li className="nav-item">
            <a className="nav-link" href="/signup">Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Log In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-us">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about-us">About Us</a>
          </li>
        </Nav>
        <Container fluid>
          <Jumbotron>
            <Row>
              <Col size="sm-12">
                <p className="text-center" style={jumbotronText}>Secure reliable communication when you need it. Learn how your organization can imporve on-call workflows with Pagr.</p>
              </Col>
            </Row>
            <Row center>
              <Col size="sm=12">
                <a href="/signup" className="btn btn-danger btn-lg">Get Started</a>
              </Col>
            </Row>
          </Jumbotron>
          <Container>
            <Row>
              <Col size="sm-12 md-4">
                <div className="container-fluid text-center">
                  <FontAwesomeIcon icon="comment-medical" size="6x" color="Dodgerblue" />
                  <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa nesciunt reprehenderit. Distinctio culpa sed soluta provident earum. Iste, veritatis.</p>
                </div>
              </Col>
              <Col size="sm-12 md-4">
                <div className="container-fluid text-center">
                  <FontAwesomeIcon icon="laptop-medical" size="6x" color="Dodgerblue" />
                  <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa nesciunt reprehenderit. Distinctio culpa sed soluta provident earum. Iste, veritatis.</p>
                </div>
              </Col>
              <Col size="sm-12 md-4">
                <div className="container-fluid text-center">
                  <FontAwesomeIcon icon="user-md" size="6x" color="Dodgerblue" />
                  <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa nesciunt reprehenderit. Distinctio culpa sed soluta provident earum. Iste, veritatis.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}


export default Home;