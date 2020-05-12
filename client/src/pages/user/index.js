import React, { Component } from "react";
import { Col, Container, Row } from "../../components/Grid";
import Footer from "../../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import './main.scss'
import Nav from "../../components/Nav";


class user extends Component {
  state={
    isAdmin: false,
  }

    componentDidMount(){
        this.setState({email: `${this.props.location.state.user.email}`, isAdmin: `${this.props.location.state.user.isAdmin}`})
      
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
                  <FullCalendar defaultView="dayGridWeek" plugins={[ dayGridPlugin, timeGridPlugin ]} />
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
                  header={{
                    left: 'timeGridWeek,timeGridDay',
                    center: 'title',
                    right: 'today,prevYear,prev,next,nextYear'
                  }}
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