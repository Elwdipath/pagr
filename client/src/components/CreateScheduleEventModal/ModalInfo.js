import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import { EventModalFooter } from "./Xindex";
import API from "../../utils/API";
// import { timeAsMs } from "@fullcalendar/core/datelib/marker";

class ModalInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      eventStaff: "",
      eventDate: "",
      eventStartTime: "",
      eventEndTime: "",
      eventSlackUserID: "",
      eventStaffEmail: ""
    }

    this.saveData = this.saveData.bind(this);
  }

  saveData(e) {
    e.preventDefault();
    let event = {
      email: this.state.eventStaffEmail,
      date: this.state.eventDate,
      startTime: this.state.eventStartTime,
      endTime: this.state.eventEndTime,
      fullName: this.state.eventStaff,
      slackUserID: this.state.eventSlackUserID
    }
    API.saveSchedule(event)
    this.setState({
      eventStaff: "",
      eventDate: "",
      eventStartTime: "",
      eventEndTime: "",
      eventSlackUserID: "",
      eventStaffEmail: "",
      value: ""
    })
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleStaffSelection = (e) => {
    const value = e.target.value;
    // this.setState({eventStaff: value});
    let index = e.target.selectedIndex;
    let optionElement = e.target.childNodes[index];
    let fName = optionElement.getAttribute('data-fname');
    let lName = optionElement.getAttribute('data-lname');
    let slackUserID = optionElement.getAttribute('data-slackUserID');
    let email = optionElement.getAttribute('data-email');
    let fullName = `${fName} ${lName}`;
    this.setState({
      value: value,
      eventStaff: fullName,
      eventSlackUserID: slackUserID,
      eventStaffEmail: email
    })
  };



  render() {

  return (
    // <!-- Modal -->
    <Modal
      show ={this.props.show}
      isOpen={this.props.isOpen}
      toggle={this.props.toggle}
    >
      <ModalHeader toggle={this.props.toggle}>
        <ModalTitle>Create New On-Call Coverage</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={this.saveData}>
          <FormGroup>
            <FormControl onChange={this.handleStaffSelection} name="eventStaff" value={this.state.value} as="select" >
              <option>Select Staff Member</option>
              {this.props.users.map(user => (
                <option value={user._id} key={user._id} data-email={user.email} data-fname={user.firstName} data-lname={user.lastName} data-slackUserID={user.slackUserID}>{user.firstName} {user.lastName}</option>
              ))}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel>Select Schedule Date</FormLabel>    
            <FormControl onChange={this.handleInputChange} name="eventDate" value={this.state.eventDate}  type="date" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Select Start Time</FormLabel>    
            <FormControl onChange={this.handleInputChange} name="eventStartTime" value={this.state.eventStartTimeValue} type="time" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Select End Time</FormLabel>    
            <FormControl onChange={this.handleInputChange} name="eventEndTime" value={this.state.eventEndTime} type="time" />
          </FormGroup>
          <Button onClick={this.props.toggle} type="submit" color="btnPrimary">Save Event</Button>
        </Form>
      </ModalBody>
      <EventModalFooter>
        <Button color="btnSecondary" onClick={this.props.toggle}>
          Cancel
        </Button>
      </EventModalFooter>
    </Modal>
  );
  }
}

export default ModalInfo;