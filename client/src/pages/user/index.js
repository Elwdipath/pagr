import React, { Component } from "react";
import { Col, Container, Row } from "../../components/Grid";
import Nav from "../../components/Nav";


class user extends Component {
  state={
    isAdmin: false,
  }
  render() {

  const renderAdminView = () => {
      if (this.state.isAdmin) {
        return (
          <div className="wrapper">
            <Nav />
            <Container fluid>
              <Row>
                <Col size="sm-12 md-3">
                  <h3>This is the admin view</h3>
                  <ul>
                    <li>Create Schedule</li>
                    <li>Edit Schedule</li>
                    <li>Page On-Call Staff</li>
                  </ul>
                </Col>
                <Col size="sm-12 md-9">
                  <h1>This is where the schedule will go</h1>
                </Col>
              </Row>
            </Container>
          </div>
      )} else {
        return (
          <div className="wrapper">
          <Nav />
          <Container fluid>
            <Row>
              <Col size="sm-12 md-3">
                <h3>This is the general user view</h3>
                <ul>
                  <li>Page On-Call Staff</li>
                </ul>
              </Col>
              <Col size="sm-12 md-9">
                <h1>This is where the schedule will go</h1>
              </Col>
            </Row>
          </Container>
        </div>
        );
      } 
    }

  return (
    <div>
      {renderAdminView()}
    </div>
    );
  }
}


export default user;