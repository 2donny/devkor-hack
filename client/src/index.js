import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Call from "./VoiceCall/Call";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Call />
  </React.StrictMode>,
  document.getElementById("root")
);
