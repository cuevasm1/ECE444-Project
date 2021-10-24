import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Search from "./search.js";
import Login from "./login.js";
import Home from "./home.js";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "/images/logo.svg";

// const App = () =>{
//   return(
//     <Router>
//       </Router>
//   );
// }
// export default App;

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="myBlue" variant="dark" sticky="top" expand="lg">
            <Navbar.Brand>
              <img src={logo} style={{ height: 53, width: 36 }} /> A* Course
              Finder
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link as={Link} to="/search">
                  Search
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
