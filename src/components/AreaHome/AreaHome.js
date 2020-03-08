import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "../../../node_modules/bootstrap/dist/js/bootstrap";
import "jquery";
import "bootstrap/dist/js/bootstrap";

class AreaHome extends Component {
  constructor() {
    super();
    this.state = {
      currentObj: [],
      isLoading: true
    };
  }

  setCurrentObj = () => {
    let currentObj = this.props.names.filter(
      item => item.state === this.props.match.params.parkpage
    );
    return currentObj;
  };
  //This one will happen if the one below cannot because the props have not come in yet. as the props come in and prevprops no longer equals props, the state will be set to the correct object
  componentDidUpdate(prevProps) {
    if (this.props.names !== prevProps.names) {
      let currentObj = this.setCurrentObj();
      this.setState({ currentObj: currentObj, isLoading: false });
      console.log(this.state);
    }
  }
  //This one will happen if the props have fully come in or loaded, and the names array is greater than 1. If it needs to load the above function will run
  componentDidMount() {
    if (this.props.names.length > 1) {
      let currentObj = this.setCurrentObj();
      this.setState({ currentObj: currentObj, isLoading: false });
      console.log(this.state);
    }
  }
  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <h2>{this.state.currentObj[0].name}</h2>
          <p>Hello</p>
          <div id="accordion" role="tablist">
            <div className="card">
              <div className="card-header" role="tab" id="headingOne">
                <h5 className="mb-0">
                  <a
                    data-toggle="collapse"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Collapsible Group Item #1
                  </a>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="headingTwo">
                <h5 className="mb-0">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Collapsible Group Item #2
                  </a>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse show"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default AreaHome;
