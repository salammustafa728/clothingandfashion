import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import "./Header.css";
import lightninglogo from "./images/logo.png";

export class Header extends Component {
  render() {
    return (
      <div >
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand >  <img style={{ width: "40%" }} src={lightninglogo} alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav style={{marginLeft:"60%"}} className="me-auto">
                <Nav.Link className="link" href="/">Home</Nav.Link>
                <Nav.Link className="link" href="#Product">Products</Nav.Link>
                <Nav.Link className="link" href="#Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
       
      </div>
    );
  }
}

export default Header;
