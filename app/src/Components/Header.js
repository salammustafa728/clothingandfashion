import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
// import './Header.css';
import lightninglogo from "./images/logo.png";
import Table from "react-bootstrap/Table";

export class Header extends Component {
  render() {
    return (
      <div style={{}}>
        <Table responsive="sm">
          {/* <thead> */}
            <tr>
              <td>
                {" "}
                <img style={{ width: "40%" }} src={lightninglogo} alt="" />
              </td>
              <td style={{ float:"right",position:"relative",top:"30%",right:"20%" }}>
                {" "}
                <Nav
                  defaultActiveKey="/"
                  as="ul"
                  style={{ display: "flex" }}
                >
                  <Nav.Item as="li">
                    <Nav.Link href="/" style={{backgroundColor:"FFEF78"}}>Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#Product">Products</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#Contact">Get in touch</Nav.Link>
                  </Nav.Item>
                </Nav>
              </td>
            </tr>
          {/* </thead> */}
        </Table>
      </div>
    );
  }
}

export default Header;
