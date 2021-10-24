import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./styles.css";

export default class Search extends Component {
  render() {
    return (
      <div style={{ marginTop: "20%" }}>
        <h1> A* Course Finder Search</h1>
        <Form
          style={{
            display: "flex"
          }}
        >
          <span style={{ width: "25%" }}></span>
          <FormControl
            type="text"
            placeholder="Search for course code, course name or keyword"
            className="mr-sm-2"
            style={{ width: "50%" }}
          />
          <Button className="myButton"> Search</Button>
        </Form>
      </div>
    );
  }
}
