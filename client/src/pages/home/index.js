import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import FormBtn from "../../components/Form";




class Home extends Component {

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <Jumbotron>
          <p className="text-center">Secure reliable communication when you need it. Learn how your organization can imporve on-call workflows with Pagr.</p>
        </Jumbotron>
      </div>
    );
  }
}


export default Home;