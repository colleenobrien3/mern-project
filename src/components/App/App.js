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
    const parkapiFullURL = "http://localhost:8080/breweries";
    let names = [];
    let named = "";
    fetch(parkapiFullURL)
      .then(response => response.json())
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
        <nav>
          <Link to="/">
            <h1>National Parks List</h1>
          </Link>
          <Link to="/parks">Parks List</Link>
          <Link to="/DE">DE</Link>
          <Link to="/PHILLY">PHILLY</Link>
          <Link to="/DC">DC</Link>
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          {/* <Route
            path="/parks"
            render={routerProps => <Parks {...routerProps} {...this.state} />}
          />
          <Route
            path="/infopage/:parkpage"
            // component={Price}
            render={routerProps => (
              <InfoPage
                setInfoPage={this.setInfoPage}
                {...routerProps}
                {...this.state}
              />
            )}
          /> */}
          <Route
            path="/DE"
            // component={Price}
            render={routerProps => (
              <DE
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
