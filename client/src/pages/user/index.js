import React, { Component } from "react";
import { Col, Container, Row } from "../../components/Grid";
import Footer from "../../components/Footer";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { DropDown, FormBtn, FormGroup, Input, Label } from '../../components/Form';
import { CreateScheduleModal , CreateScheduleBtn  } from '../../components/CreateScheduleModal';
import dummy from '../../utils/DummySchedule';
import './main.scss';
import './style.css';
import Nav from "../../components/Nav";

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button"



class user extends Component {
  constructor() {
    super()
  this.state={
    isAdmin: false,
    events: dummy,
    email: "",
    modal: false
  };
  
  this.toggle = this.toggle.bind(this);
}
toggle() {
  this.setState(prevState => ({
      modal: !prevState.modal
  }));

}

  pageOnCall = info => {
    document.getElementById('createScheduleModal').modal('show');
    alert("Title: " + info.event.title);
  };

    componentDidMount(){
        this.setState({email: `${this.props.location.state.user.email}`, 
        isAdmin: `${this.props.location.state.user.isAdmin}`,
        schedules: `${this.props.location.state.user.schedules}`})
    };

    handleEventClick = ({ event, el }) => {
      this.toggle();
      this.setState({ event });
    };

  render() {

  const renderAdminView = () => {
      if (this.state.isAdmin) {
        return (
          <div className="wrapper">
            <Nav>
              <li className="nav-item">
                <a className="nav-link" href="/">Log Out</a>
              </li>
            </Nav>
            <Container fluid>
              <Row>
                <Col size="sm-12 md-2">
                  <div className="container-fluid mt-3">
                    <CreateScheduleBtn />
                  </div>
                </Col>
                <Col size="sm-12 md-10">
                  <div className="mt-1 mr-3">
                    <FullCalendar 
                      defaultView="dayGridWeek" 
                      plugins={[ dayGridPlugin, timeGridPlugin, bootstrapPlugin ]} 
                      events={this.state.events}
                      header={{
                        left: 'timeGridWeek,timeGridDay',
                        center: 'title',
                        right: 'today,prevYear,prev,next,nextYear'
                      }}
                      eventClick={this.handleEventClick}
                      />
                    </div>
                    <div className="mt-5"></div>
                </Col>
              </Row>
            </Container>


            <Modal
            // show={this.toggle}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {/* {this.state.event.title} */}
          </ModalHeader>
          <ModalBody>
            <div>
              <p>TEST</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Do Something</Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>


            <CreateScheduleModal>
              <FormGroup>
                <DropDown />
              </FormGroup>
              <FormGroup>
                <Label>Start Time</Label>
                <Input type="time" />
              </FormGroup>
              <FormGroup>
                <Label>End Time</Label>
                <Input type="time" />
              </FormGroup>
            </CreateScheduleModal>
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