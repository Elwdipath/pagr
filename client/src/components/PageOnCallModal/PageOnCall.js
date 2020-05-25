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

class PageOnCall extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      staffMember: this.props.staffMember,
      slackUserID: this.props.eventSlackUserID,
      message:""
    }

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(e) {
    e.preventDefault();
    let text = {text: this.state.message, slackUserID: this.props.eventSlackUserID}
    console.log(text);
    API.sendMessage(text);
    this.setState({message: ""})
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {

  return (
    // <!-- Modal -->
    <Modal
      show ={this.props.show}
      isOpen={this.props.isOpen}
      toggle={this.props.togglePageOnCall}
    >
      <ModalHeader toggle={this.props.togglePageOnCall}>
  <ModalTitle>Page {this.props.staffMember}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={this.sendMessage}>
          <FormGroup>
            <FormLabel>Send message to on-call staff</FormLabel>    
            <FormControl onChange={this.handleInputChange} name="message" value={this.state.message}  as="textarea" rows="4" />
          </FormGroup>
          <Button onClick={this.props.toggle} type="submit" color="btnPrimary">Send Message</Button>
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

export default PageOnCall;