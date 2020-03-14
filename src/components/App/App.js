// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//         <div>
//         </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "../Home/Home";
// import Parks from "../Parks/Parks";
// import InfoPage from "../Infopage/InfoPage";
import "./App.css";
import DE from "../DE/DE";
import AreaHome from "../AreaHome/AreaHome";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "../../../node_modules/bootstrap/dist/js/bootstrap";
import "jquery";
import "bootstrap/dist/js/bootstrap";
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoPage: null,
      names: []
    };
    this.setInfoPage = this.setInfoPage.bind(this);
  }

  setInfoPage(infoPage) {
    this.setState({ infoPage: infoPage });
  }

  componentDidMount() {
    let parkapiFullURL = "";
    if (process.env.NODE_ENV === "production") {
      parkapiFullURL = "https://evening-ravine-76048.herokuapp.com/breweries";
    } else if (process.env.NODE_ENV === "development") {
      parkapiFullURL = "http://localhost:8080/breweries";
    }
    console.log(parkapiFullURL);
    console.log(process.env.NODE_ENV);
    let names = [];
    let named = "";
    axios
      .get(parkapiFullURL)
      // .then(response => response.json())
      .then(response => {
        console.log(response);
        named = response;
        named.forEach(item => {
          // let nameofPark= item.fullName
          names.push(item);
          // console.log(names)
          this.setState({ names: names });
          console.log(this.state);
        });
      })

      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/">
            <h1>BrewerDE</h1>
          </Link>
          {/* <Link to="/DE">DE</Link>
          <Link to="/PHILLY">PHILLY</Link>
          <Link to="/DC">DC</Link> */}
          <Link to="/infopage/Delaware">DE</Link>
          <Link to="/infopage/Pennsylvania">PA</Link>
          <Link to="/infopage/Virginia">VA</Link>
          <Link to="/infopage/Maryland">MD</Link>
          <Link to="/infopage/District of Columbia">DC</Link>
          {/* <Link to={"/infopage/" + item.parkCode}>{item.fullName}</Link> */}
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          {/* <Route
            path="/parks"
            render={routerProps => <Parks {...routerProps} {...this.state} />}
          /> */}
          <Route
            path="/infopage/:parkpage"
            // component={Price}
            render={routerProps => (
              <AreaHome
                setInfoPage={this.setInfoPage}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route
            path="/DE"
            // component={Price}
            render={routerProps => (
              <AreaHome
                setInfoPage={this.setInfoPage}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route
            path="/PHILLY"
            // component={Price}
            render={routerProps => (
              <AreaHome
                setInfoPage={this.setInfoPage}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route
            path="/DC"
            // component={Price}
            render={routerProps => (
              <AreaHome
                setInfoPage={this.setInfoPage}
                {...routerProps}
                {...this.state}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
