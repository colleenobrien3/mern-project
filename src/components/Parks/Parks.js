// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./Parks.css";
// import listOfParks from "./parks.json";

// class Parks extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       objects: this.props.names
//     };
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.names !== prevProps.names)
//       this.setState({ objects: this.props.names });
//   }
//   render() {
//     let listofThem = this.state.objects;
//     console.log(listofThem);
//     let list = listofThem.map(item => {
//       return (
//         <div
//           className="park"
//           key={item.fullName}
//           style={{ backgroundImage: `url(${item.images[0].url})` }}
//         >
//           <p>
//             <Link to={"/infopage/" + item.parkCode}>{item.fullName}</Link>:{" "}
//             {item.fullName}
//           </p>
//         </div>
//       );
//     });
//     return <div id="container">{list}</div>;
//   }
// }

// export default Parks;
