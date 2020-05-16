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
import { EventModalFooter } from "./index";

export function CreateScheduleEventModal(props) {

  return (
    // <!-- Modal -->
    <Modal
      show={props.show}
      isOpen={props.isOpen}
      toggle={props.toggle}
      className={props.className}
    >
      <ModalHeader toggle={props.toggle}>
        <ModalTitle>Create New On-Call Coverage</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <FormControl as="select">
              <option>Select Staff Member</option>
              {props.users.map(user => (
                <option value={props.eventEmail} onChange={props.handleInputChange} name="eventEmail" data-useremail={user.email} key={user._id}>{user.firstName} {user.lastName}</option>
              ))}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel>Select Schedule Date</FormLabel>    
            <FormControl value={props.eventDate} name="eventDate"  type="date" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Select Start Date</FormLabel>    
            <FormControl type="time" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Select End Date</FormLabel>    
            <FormControl type="time" />
          </FormGroup>
        </Form>
      </ModalBody>
      <EventModalFooter>
        <Button onClick={props.saveEvent} color={props.btnPrimary}>Save Event</Button>
        <Button color={props.btnSecondary} onClick={props.toggle}>
          Cancel
        </Button>
      </EventModalFooter>
    </Modal>
  );
}
