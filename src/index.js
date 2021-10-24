import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
//import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//serviceWorker.unregister();
