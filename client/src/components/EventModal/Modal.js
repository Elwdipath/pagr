import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import { EventModalHeader, EventModalBody, EventModalFooter } from "./index";

export function EventModal(props) {
  return (
    // <!-- Modal -->
    <Modal
      show={props.show}
      isOpen={props.isOpen}
      toggle={props.toggle}
      className={props.className}
    >
      <ModalHeader toggle={props.toggle}>
        <ModalTitle>{props.eventTitle}</ModalTitle>
      </ModalHeader>
      <EventModalBody>
        <h2>Staff Member: {props.eventStaff}</h2>
        <h2>Start Time: {props.eventStartTime}</h2>
        <h2>End Time: {props.eventEndTime}</h2>
      </EventModalBody>
      <EventModalFooter>
        <Button color={props.btnPrimary}>Edit Event</Button>
        <Button color={props.btnPrimary}>Page On-Call</Button>
        <Button onClick={props.deleteEvent} color={props.btnPrimary}>Delete Event</Button>
        <Button color={props.btnSecondary} onClick={props.toggle}>
          Cancel
        </Button>
      </EventModalFooter>
    </Modal>
  );
}
