import axios from "axios";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./Product.css"
export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
          apiData: [],
          err: "",
        };
      }
      componentDidMount = async() => {
        // let apiUrl = process.env.REACT_APP_API;
      await axios
          .get("https://fakestoreapi.com/products")
          .then((response) => {
            this.setState({
              apiData: response.data,
            });
          })
          .catch((err) => this.setState({ err: err.message }));
      };
  render() {
    return (
      <div>
        <div id="Product">
                <div >
          {this.state.apiData.map((data, idx) => {
            return (
              <div  key={idx} class="gridDiv">
                <div className="div1">
                  <Card
                    className="card2"
                    style={{
                      width: "18rem",
                      background: "#7ECA9C",
                      marginBottom: "10px",
                      marginLeft: "20px",
                      marginTop: "10px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ width: "18rem" }}
                      src={data.image}
                    />
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Title>{data.price}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
                </div>
      </div>
    );
  }
}

export default Products;
