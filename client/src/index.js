import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Call from "./VoiceCall/Call";
import Chatting from "./Chatting/Chatting";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Call /> */}
    <Chatting />
  </React.StrictMode>,
  document.getElementById("root")
);
