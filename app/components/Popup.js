import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <Button onClick={() => this.handleModal()}>Pay</Button>
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>Confirmation order</Modal.Title>
          </Modal.Header>
          <Modal.Body>Thank you for your order!</Modal.Body>
          <Modal.Footer>
            <Link to="/products">View all products</Link>
            <Button onClick={() => this.handleModal()} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Popup;
