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
        <p><strong>Staff Member Email:</strong> {props.eventStaff}</p>
        <p><strong>Start:</strong> {props.eventStartTime}</p>
        <p><strong>End:</strong> {props.eventEndTime}</p>
      </EventModalBody>
      <EventModalFooter>
        <Button color={props.btnPrimary}>Edit Event</Button>
        <Button onClick={props.onClick} color={props.btnPrimary}>Page On-Call</Button>
        <Button onClick={props.deleteEvent} color={props.btnPrimary}>Delete Event</Button>
        <Button color={props.btnSecondary} onClick={props.toggle}>
          Cancel
        </Button>
      </EventModalFooter>
    </Modal>
  );
}
