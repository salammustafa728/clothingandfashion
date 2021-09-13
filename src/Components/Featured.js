import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

export class Featured extends Component {
  render() {
    return (
      <div>
        <Modal.Dialog show={this.props.show} style={{}}>
          <Modal.Header>
            <Modal.Title>
              {this.props.price} {this.props.description}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.props.image}
              alt="product-img"
              height="200px"
              width="200px"
            />{" "}
          </Modal.Body>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Dialog>
      </div>
    );
  }
}

export default Featured;
