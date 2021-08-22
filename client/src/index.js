import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Call from "./VoiceCall/Call";
import Chatting from "./Chatting/Chatting";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      {/* <App /> */}
      {/* <Call /> */}
      <Chatting />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById("root")
);
