import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="homeCont">
          <div id="greeting">
            Welcome to BrewerDE, the Delawarean's guide to breweries in the
            first state and surrounding areas. Click on a location to browse
            breweries!
          </div>
          <div className="beerPic"></div>
        </div>
        <div className="navigation">
          <Link to="/infopage/Delaware">Delaware</Link>
          <Link to="/infopage/Pennsylvania">Pennsylvania</Link>
          <div className="vaPic">
            {" "}
            <Link to="/infopage/Virginia">Virginia</Link>
          </div>
          <Link to="/infopage/Maryland">Maryland</Link>
          <Link to="/infopage/District of Columbia">Washington, D.C.</Link>
        </div>
      </div>
    );
  }
}

export default Home;
