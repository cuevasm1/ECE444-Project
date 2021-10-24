/*import "./styles.css";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import logo from "/images/logo.svg";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import navbar from "./navbar";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
*/
/*export default function App() {
  return (
    <div className="App">
      <Navbar bg="myBlue" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand>
          <img src={logo} style={{ height: 53, width: 36 }} /> A* Course Finder
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic Janelle!</h2>
    </div>
  );
}
*/

import React from "react";
import "./styles.css";
//import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Search from "./search.js";
import Login from "./login.js";
import NavbarComp from "./navbar.js";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "/images/logo.svg";

// const App = () =>{
//   return(
//     <Router>
//       </Router>
//   );
// }
// export default App;

function App() {
  return (
    <div className="App">
      <NavbarComp />
    </div>
  );
}
export default App;
