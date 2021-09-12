import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export class Contact extends Component {
  render() {
    return (
      <div>
        <Form>
          <fieldset disabled>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">
                Disabled input
              </Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder="Disabled input"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">
                Disabled select menu
              </Form.Label>
              <Form.Select id="disabledSelect">
                <option>Disabled select</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id="disabledFieldsetCheck"
                label="Can't check this"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </fieldset>
        </Form>
      </div>
    );
  }
}

export default Contact;
