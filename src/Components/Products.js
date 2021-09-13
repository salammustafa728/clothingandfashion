import axios from "axios";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Pagination from "./Pagination";
import "./Product.css";
import Featured from "./Featured";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      err: "",
      postPerPage: 4,
      currentPage: 1,
      setCurrentPage: 1,
      show: false,
      title: "",
      image: "",
      price: "",
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
    const apiData2 = this.state.apiData.slice(5);
    const idxOfLst = this.state.currentPage * this.state.postPerPage;
    const idxOfFirst = idxOfLst - this.state.postPerPage;
    const currentPosts = apiData2.slice(idxOfFirst, idxOfLst);
    const paginate = (number) => {
      this.setState({ currentPage: number });
    };

    return (
      <div>
        <div id="Product">
          <Container>
            <Row>
              <Col xs={11} md={7}>
                <div className="grid">
                  {currentPosts.map((data, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => this.setState({ show: true })}
                      >
                        <div
                          className="divgrid"
                          onClick={() => {
                            this.setState({
                              title: data.title,
                              price: data.price,
                              image: data.image,
                            });
                          }}
                        >
                          <Card
                            className="card2"
                            style={{
                              width: "18rem",
                              marginBottom: "10px",
                              marginLeft: "20px",
                              marginTop: "10px",
                            }}
                          >
                            <Card.Img
                              variant="top"
                              style={{ width: "9rem" }}
                              src={data.image}
                            />
                            <Card.Body>
                              <Card.Title>
                                {data.title}
                                <Card.Title className="priceTitle">
                                  {data.price}
                                </Card.Title>
                              </Card.Title>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Col>
              <Col xs={5} md={3}>
                <Featured
                  curenPosts={this.state.curenPosts}
                  show={this.state.show}
                  title={this.state.title}
                  image={this.state.image}
                  price={this.state.price}
                />
              </Col>
            </Row>
          </Container>

          <div>
            <Pagination
              apiData={this.state.apiData}
              paginate={paginate}
              postPerPage={this.state.postPerPage}
              totalPosts={this.state.apiData.length}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
