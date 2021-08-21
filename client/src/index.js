import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Call from "./VoiceCall/Call";

ReactDOM.render(
  <React.StrictMode>
    <Call />
  </React.StrictMode>,
  document.getElementById("root")
);
