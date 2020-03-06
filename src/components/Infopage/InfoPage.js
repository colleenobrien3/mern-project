// import React, { Component } from "react";
// // import axios from "axios";
// import "./InfoPage.css";

// const parkapiURL = "https://developer.nps.gov/api/v1/parks?parkCode=";

// class InfoPage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       currentObj: [],
//       isLoading: true
//     };
//   }
//   setCurrentObj = () => {
//     let currentObj = this.props.names.filter(
//       item => item.parkCode === this.props.match.params.parkpage
//     );
//     return currentObj;
//   };
//   //This one will happen if the one below cannot because the props have not come in yet. as the props come in and prevprops no longer equals props, the state will be set to the correct object
//   componentDidUpdate(prevProps) {
//     if (this.props.names !== prevProps.names) {
//       let currentObj = this.setCurrentObj();
//       this.setState({ currentObj: currentObj, isLoading: false });
//     }
//   }
//   //This one will happen if the props have fully come in or loaded, and the names array is greater than 1. If it needs to load the above function will run
//   componentDidMount() {
//     if (this.props.names.length > 1) {
//       let currentObj = this.setCurrentObj();
//       this.setState({ currentObj: currentObj, isLoading: false });
//     }
//   }
//   render() {
//     // console.log('currentObj :', currentObj);
//     if (!this.state.isLoading) {
//       return (
//         <div>
//           <div
//             className="park"
//             style={{
//               backgroundImage: `url(${this.state.currentObj[0].images[1].url})`
//             }}
//           ></div>
//           {/* <h1>Bitcoin price in {this.props.match.params.parkpage}</h1> */}
//           <h2>{this.state.currentObj[0].fullName}</h2>
//           <h3>Description</h3>
//           <p>{this.state.currentObj[0].description}</p>
//           <h3>Directions</h3>
//           <p>{this.state.currentObj[0].directionsInfo}</p>
//           <div className="price">{this.props.infoPage}</div>
//         </div>
//       );
//     } else {
//       return <div>Loading</div>;
//     }
//   }
// }

// export default InfoPage;
