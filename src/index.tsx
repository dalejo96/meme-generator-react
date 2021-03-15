import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./components/App"

const ROOT = document.querySelector(".container");

ReactDOM.render(<App name="David" />, ROOT);
//ReactDOM.render(<h1>Hello world!</h1>, ROOT);
