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
import Button from "react-bootstrap/Button";
import dummy from "../../utils/DummySchedule";
import "./main.scss";
import "./style.css";
import Nav from "../../components/Nav";
import { DropDown, FormGroup, Input, Label } from "../../components/Form";
import { Calendar } from "@fullcalendar/core";

class user extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: this.props.location.state.user.isAdmin,
      events: dummy,
      email: this.props.location.state.user.email,
      event: {},
      users: [],
      createEventShow: false,
      eventStaff: "",
      eventDate: "",
      eventStartTime: "",
      eventEndTime: ""
    };

    this.toggle = this.toggle.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  saveEvent = () => {
    event.preventDefault();
    console.log("eventSaved");
    let event = {
      eventStaff: this.state.eventStaff,
      eventDate: this.state.eventDate,
      eventStartTime: this.state.eventStartTime,
      eventEndTime: this.state.eventEndTime
    }
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

  getUsers = async () => {
    let users = await API.getUsers({});
    this.setState({ users: users.data });
  };

  createSchedule = () => {
    API.createSchedule({
      eventStaff: "test@test.com",
      eventDate: "2020-05-17",
      eventStartTime: "08:30:00",
      eventEndTime: "10:30:00",
    });
  };

  pageOnCall = (info) => {};

    testing = async() => {
    let testAll = await API.getSchedules()
    console.log("All schedules: " + testAll)
    this.setState({
      events: testAll.data
    });
    }
  componentDidMount() {

    this.testing()

    }
    // let testTrimmed = testAll.forEach(sched => {
    //   return ({
    //     title: sched.title,
    //     start: sched.startTime,
    //     end: sched.endTime
    //   })
    // })
    
 
  handleEventClick = ({ event, el }) => {
    this.toggle();
    this.setState({ event });
  };

  renderAdminView = () => {
    if (this.state.isAdmin) {
      console.log("admin");
      return (
        <div className="wrapper">
          <Nav>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Log Out
              </a>
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
            className={this.props.className}
            btnPrimary="Primary"
            btnSeconday="Secondary"
            eventTitle={this.state.event.title}
          />
          <ModalInfo
            show={this.state.createEventShow}
            users={this.state.users}
            toggle={this.handleClose}
            onSubmit={this.saveEvent}
            onChange={this.handleInputChange}
          />
        </div>
      );
    } else {
      console.log("standard");
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
                  plugins={[dayGridPlugin, timeGridPlugin]}
                  events={this.state.events}
                  header={{
                    left: "timeGridWeek,timeGridDay",
                    center: "title",
                    right: "today,prevYear,prev,next,nextYear",
                  }}
                  eventClick={this.pageOnCall}
                />
              </Col>
            </Row>
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
