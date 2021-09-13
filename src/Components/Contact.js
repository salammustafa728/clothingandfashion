import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export class Contact extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>GET IN TOUCH</h1>
        <Form style={{ marginLeft: "10%", marginRight: "10%" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>message</Form.Label>
            <Form.Control style={{height:"100px"}} type="text" placeholder="Enter your message" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Contact;
