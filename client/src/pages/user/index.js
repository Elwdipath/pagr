import React, { Component } from "react";
import { Col, Container, Row } from "../../components/Grid";
import Footer from "../../components/Footer";
import { EventModal } from "../../components/EventModal";
import FullCalendar from "@fullcalendar/react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import API from "../../utils/API";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import ModalInfo from "../../components/CreateScheduleEventModal/ModalInfo.js";
import PageOnCall from "../../components/PageOnCallModal/PageOnCall.js";
import Button from "react-bootstrap/Button";
import dummy from "../../utils/DummySchedule";
import "./main.scss";
import "./style.css";
import Nav from "../../components/Nav";
import { DropDown, FormGroup, Input, Label } from "../../components/Form";
import { Calendar } from "@fullcalendar/core";
import { Redirect } from "react-router-dom";

class user extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: this.props.location.state.user.isAdmin,
      events: {},
      email: this.props.location.state.user.email,
      event: [],
      users: [],
      createEventShow: false,
      pageOnCall: false,
      eventStaff: "",
      eventSlackUserID: "",
      eventTitle: "",
      eventDate: "",
      eventStartTime: "",
      eventEndTime: "",
      eventID: ""
    };

    this.toggle = this.toggle.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handlePageOnCallShow = this.handlePageOnCallShow.bind(this);
    this.handlePageOnCallClose = this.handlePageOnCallClose.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.togglePageOnCall = this.togglePageOnCall.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
    this.getAllSchedules({});
  }

  togglePageOnCall() {
    this.setState((prevState) => ({
      pageOnCall: !prevState.pageOnCall,
    }));
  }

  deleteEvent = () => {
    let id = this.state.eventID;
    API.deleteSchedule(id);
    this.toggle();
  }

  saveEvent = () => {
    event.preventDefault();
    console.log("eventSaved");
    let event = {
      eventStaff: this.state.eventStaff,
      eventDate: this.state.eventDate,
      eventStartTime: this.state.eventStartTime,
      eventEndTime: this.state.eventEndTime,
    };
    console.log(event);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleClose() {
    this.setState({ createEventShow: false });
  }

  handleShow() {
    this.setState({ createEventShow: true });
    this.getUsers();
  }

  handlePageOnCallShow() {
    this.handleClose();
    this.setState({modal: false})
    this.setState({ pageOnCall: true });
  }

  handlePageOnCallClose() {
    this.setState({ pageOnCall: false });
  }

  getUsers = async () => {
    let users = await API.getUsers({});
    this.setState({ users: users.data });
  };

// ========================= TESTING SETTING SCHEDULE DATA
  getAllSchedules = async () => {
    let allSchedules = await API.getSchedules();
    this.setState({
      events: allSchedules.data,
    });
  };
// ========================= TESTING SETTING SCHEDULE DATA

  componentDidMount() {
    this.getAllSchedules();
    this.getUsers();
  }

  handleEventClick = ({ event, el }) => {
    if (this.state.isAdmin) {
      console.log(event);
      this.toggle();
      this.setState({ 
        eventTitle: event.title,
        eventStaff: event._def.extendedProps.contactInfo.email,
        eventStartTime: event.start.toString(),
        eventSlackUserID: event._def.extendedProps.contactInfo.slackUserID,
        eventEndTime: event.end.toString(),
        eventID: event._def.extendedProps._id
      });
      console.log(event);
      console.log(event._def.extendedProps._id);
    } else {
      this.togglePageOnCall();
      this.setState({ 
        eventTitle: event.title,
        eventStaff: event._def.extendedProps.contactInfo.email,
        eventStartTime: event.start.toString(),
        eventSlackUserID: event._def.extendedProps.contactInfo.slackUserID,
        eventEndTime: event.end.toString(),
        eventID: event._def.extendedProps._id
      });
      console.log(event);
      console.log(event._def.extendedProps._id);
    }

    }

    
    logout = () =>{
      alert("you logged out")
      this.setState({redirect: "/"})
      
  };

  renderAdminView = () => {
    if (this.state.redirect) {
      return <Redirect to={{pathname: this.state.redirect}} />
    }
    if (this.state.isAdmin) {
      console.log("admin");
      return (
        <div className="wrapper">
          <Nav>
            <li className="nav-item">
              <a className="nav-link" onClick={this.logout}>
                Log Out
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/contact-us">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about-us">About Us</a>
          </li>
          </Nav>
          <Container fluid>
            <Row>
              <Col size="sm-12 md-2">
                <div className="container-fluid mt-3">
                  <Button variant="primary" onClick={this.handleShow}>
                    Create On-Call Schedule
                  </Button>
                  {/* <CreateScheduleBtn onClick={this.getUsers} /> */}
                </div>
              </Col>
              <Col size="sm-12 md-10">
                <div className="mt-1 mr-3">
                  <FullCalendar
                    defaultView="timeGridWeek"
                    plugins={[dayGridPlugin, timeGridPlugin, bootstrapPlugin]}
                    events={this.state.events}
                    header={{
                      left: "timeGridWeek,timeGridDay",
                      center: "title",
                      right: "today,prevYear,prev,next,nextYear",
                    }}
                    eventClick={this.handleEventClick}
                  />
                </div>
                <div className="mt-5"></div>
              </Col>
            </Row>
          </Container>
          <EventModal
            show={this.state.modal}
            isOpen={this.state.modal}
            toggle={this.toggle}
            onClick={this.handlePageOnCallShow}
            className={this.props.className}
            btnPrimary="Primary"
            btnSeconday="Secondary"
            eventStaff={this.state.eventStaff}
            eventTitle={this.state.eventTitle}
            eventSlackUserID={this.state.eventStaff}
            eventStartTime={this.state.eventStartTime}
            togglePageOnCall={this.togglePageOnCall}
            eventEndTime={this.state.eventEndTime}
            deleteEvent={this.deleteEvent}
            // eventStaffSlackID={this.state.event._def.extendedProps.contactInfo.slackUserID}
          />
          <ModalInfo
            show={this.state.createEventShow}
            users={this.state.users}
            toggle={this.handleClose}
            onSubmit={this.saveEvent}
            onChange={this.handleInputChange}
          />
          <PageOnCall 
            show={this.state.pageOnCall}
            isOpen={this.state.pageOnCall}
            toggle={this.togglePageOnCall}
            handleClose={this.handlePageOnCallClose}
            onSubmit={this.saveEvent}
            onChange={this.handleInputChange}
            staffMember={this.state.eventStaff}
            eventSlackUserID={this.state.eventSlackUserID}
          />
        </div>
      );
    } else {
      console.log("standard");
      return (
        <div className="wrapper">
            <Nav>
            <li className="nav-item">
              <a className="nav-link" href="/api/users/logout">
                Log Out
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/contact-us">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about-us">About Us</a>
          </li>
          </Nav>
          <Container fluid>
            <Row>
              <Col size="sm-12">
                <FullCalendar
                  defaultView="timeGridDay"
                  plugins={[dayGridPlugin, timeGridPlugin]}
                  events={this.state.events}
                  header={{
                    left: "timeGridWeek,timeGridDay",
                    center: "title",
                    right: "today,prevYear,prev,next,nextYear",
                  }}
                  eventClick={this.handleEventClick}
                />
              </Col>
            </Row>
            <PageOnCall 
            show={this.state.pageOnCall}
            isOpen={this.state.pageOnCall}
            toggle={this.togglePageOnCall}
            handleClose={this.handlePageOnCallClose}
            onSubmit={this.saveEvent}
            onChange={this.handleInputChange}
            staffMember={this.state.eventStaff}
            eventSlackUserID={this.state.eventSlackUserID}
          />
          </Container>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.renderAdminView()}
        <Footer />
      </div>
    );
  }
}

export default user;