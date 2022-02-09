import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class ErrorPopup extends React.Component {
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
        {/* <Button onClick={() => this.handleModal()}>Pay</Button> */}
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>Information about your cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>You don't have any items in your cart yet!</Modal.Body>
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

export default ErrorPopup;
