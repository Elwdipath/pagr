import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import { FormBtn } from "../../components/Form";




class Home extends Component {

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <Container />
        <Jumbotron>
          <Row>
            <Col size="sm-12">
              <p className="text-center">Secure reliable communication when you need it. Learn how your organization can imporve on-call workflows with Pagr.</p>
            </Col>
          </Row>
          <Row center="true">
            <Col size="sm=12">
              <a href="/sign-up" className="btn btn-success">Get Started</a>
            </Col>
          </Row>
        </Jumbotron>
        <Container />
      </div>
    );
  }
}


export default Home;