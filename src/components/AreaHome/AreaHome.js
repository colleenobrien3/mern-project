import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "../../../node_modules/bootstrap/dist/js/bootstrap";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "./AreaHome.css";
import { Link } from "react-router-dom";

class AreaHome extends Component {
  constructor() {
    super();
    this.state = {
      currentObj: [],
      isLoading: true,
    };
  }

  setCurrentObj = () => {
    let currentObj = this.props.names.filter(
      (item) => item.state === this.props.match.params.parkpage
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
      let listofThem = this.state.currentObj;
      let list = listofThem.map((item) => {
        return (
          //   <div>
          //     <p>
          //       <Link to={"/infopage/" + item.parkCode}>{item.fullName}</Link>:{" "}
          //           {item.fullName}
          //       {item.name}
          //     </p>
          //   </div>
          <div className="card">
            <div className="card-header" role="tab" id="headingOne">
              <h5 className="mb-0">
                <a
                  data-toggle="collapse"
                  href="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  {item.name}
                </a>
              </h5>
            </div>

            <div
              id="collapse1"
              className="collapse show"
              role="tabpanel"
              aria-labelledby="headingOne"
            >
              <div className="card-body">
                Street: {item.street}
                <br />
                City: {item.city}
                <br />
                Postal code:
                {item.postal_code}
                <br />
                Brewery type: {item.brewery_type}
              </div>
            </div>
          </div>

          //   </div>
        );
      });
      return (
        <div className="pageContainer">
          <Link to="/">
            <div id="homeButton">Home</div>
          </Link>
          <div id="container">{list}</div>
        </div>
      );
      //   return (
      //     <div>
      //       <h2>{this.state.currentObj[0].name}</h2>
      //       <p>Hello</p>

      //       <div id="accordion" role="tablist">

      //           for ()
      //         <div className="card">
      //           <div className="card-header" role="tab" id="headingOne">
      //             <h5 className="mb-0">
      //               <a
      //                 data-toggle="collapse"
      //                 href="#collapseOne"
      //                 aria-expanded="true"
      //                 aria-controls="collapseOne"
      //               >
      //                 Collapsible Group Item #1
      //               </a>
      //             </h5>
      //           </div>

      //           <div
      //             id="collapseOne"
      //             className="collapse show"
      //             role="tabpanel"
      //             aria-labelledby="headingOne"
      //           >
      //             <div className="card-body">
      //               Anim pariatur cliche reprehenderit, enim eiusmod high life
      //               accusamus terry richardson ad squid.
      //             </div>
      //           </div>
      //         </div>

      //   </div>
      // </div>
      //   );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default AreaHome;
