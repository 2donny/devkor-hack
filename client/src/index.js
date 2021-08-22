import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Call from "./VoiceCall/Call";
import Chatting from "./Chatting/Chatting";
import MyPage from "./profile/MyPage";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
   {/* <Call /> */}
    {/* <Chatting /> */}
    {<MyPage/>}
  </React.StrictMode>,
  document.getElementById("root")
);
