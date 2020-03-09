import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="homeCont">
        <div id="greeting">
          Welcome to BrewerDE, the Delawarean's guide to breweries in the first
          state and surrounding areas.
        </div>
        <div className="beerPic"></div>
      </div>
    );
  }
}

export default Home;
