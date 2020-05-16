import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {EventModalHeader, EventModalBody, EventModalFooter} from "./index";

export function EventModal(props) {
  return (
    // <!-- Modal -->
    <Modal
      show={props.show}
      isOpen={props.isOpen}
      toggle={props.toggle}
      className={props.className}
    >
      <EventModalHeader toggle={props.toggle}>
        <h1>Test Modal</h1>
      </EventModalHeader>
      <EventModalBody>
        <p>This is the body</p>
      </EventModalBody>
      <EventModalFooter>
        <Button color={props.btnPrimary}>Do Something</Button>
        <Button color={props.btnSecondary} onClick={props.toggle}>
          Cancel
        </Button>
      </EventModalFooter>
    </Modal>
  );
}
