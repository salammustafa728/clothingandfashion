import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import Contact from "./Components/Contact";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
       <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/product">
              <Products />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
