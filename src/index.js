import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App/App";
import "./index.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./components/App/App.js";

// // ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//     <Router>
//       <App />
//     </Router>,
//     document.getElementById("root")
// );
