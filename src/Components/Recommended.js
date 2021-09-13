import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./Recommend.css";
export class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      err: "",
    };
  }
  componentDidMount = async () => {
    let apiUrl = process.env.REACT_APP_API;
    await axios
      .get(apiUrl)
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
        <div className="recommenedDiv ">
          {this.state.apiData
            .map((data, idx) => {
              return (
                <div key={idx}>
                  <div>
                    <Card
                      className="card"
                      style={{
                        width: "18rem",
                        marginBottom: "10px",
                        marginLeft: "20px",
                        marginTop: "10px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        style={{ width: "10rem" }}
                        src={data.image}
                      />
                      <Card.Body className="cardTitle">
                        <Card.Title>
                          {data.title} <p></p>{" "}
                        </Card.Title>
                        <Card.Title className="priceTitle">
                          {data.price}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              );
            })
            .slice(0, 4)}
        </div>
      </div>
    );
  }
}

export default Recommended;
