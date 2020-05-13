import React, { Component, useState } from "react";
import { Col, Container, Row } from "../../components/Grid";
import Footer from "../../components/Footer";
import FullCalendar from "@fullcalendar/react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import dummy from '../../utils/DummySchedule';
import './main.scss'
import Nav from "../../components/Nav";


class user extends Component {
  state={
    isAdmin: false,
    events: dummy,
    email: ""
  }

  pageOnCall = info => {
    alert("Title: " + info.event.title);
  }

    componentDidMount(){
        this.setState({email: `${this.props.location.state.user.email}`, 
        isAdmin: `${this.props.location.state.user.isAdmin}`,
        schedules: `${this.props.location.state.user.schedules}`})
    }

  render() {

  const renderAdminView = () => {
      if (this.state.isAdmin) {
        return (
          <div className="wrapper">
            {this.state.email ? <Nav /> : <Nav>
              <li className="nav-item">
                <a className="nav-link" href="/signup">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Log In</a>
              </li>
            </Nav>}
            <Container fluid>
              <Row>
                <Col size="sm-12 md-2">
                  <h3>This is the admin view</h3>
                  <ul>
                    <li>Create Schedule</li>
                    <li>Edit Schedule</li>
                    <li>Page On-Call Staff</li>
                  </ul>
                </Col>
                <Col size="sm-12 md-10">
                  <h1>This is where the schedule will go</h1>
                  <FullCalendar 
                    defaultView="dayGridWeek" 
                    plugins={[ dayGridPlugin, timeGridPlugin ]} 
                    eventClick={this.pageOnCall}
                    />
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
              <Col size="sm-12 md-2">
                <h3>This is the general user view</h3>
                <ul>
                  <li>Page On-Call Staff</li>
                </ul>
              </Col>
              <Col size="sm-12 md-10">
                <h1>This is where the schedule will go</h1>
                <FullCalendar 
                  defaultView="timeGridDay"
                  plugins={[ dayGridPlugin, timeGridPlugin ]}
                  events={this.state.events}
                  header={{
                    left: 'timeGridWeek,timeGridDay',
                    center: 'title',
                    right: 'today,prevYear,prev,next,nextYear'
                  }}
                  eventClick={this.pageOnCall}
                  />
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
      <Footer />
    </div>
    );
  }
}


export default user;