import React from "react";
import "./App.css";
import HueContextProvider from "../contexts/HueContextProvider";
import Lights from "./Lights";
import BridgeForm from "./BridgeForm";
import BridgeList from "./BridgeList";
import ConfigContextProvider from "../contexts/ConfigContextProvider";
import MessageContextProvider from "../contexts/MessageContextProvider";
import MessageList from "./MessageList";
import Top from "./Top";

function App() {
  return (
    <div className="App">
      <ConfigContextProvider>
        <MessageContextProvider>
          <HueContextProvider>
            <Top />
            <BridgeForm />
            <BridgeList />
            <MessageList />
            <Lights />
          </HueContextProvider>
        </MessageContextProvider>
      </ConfigContextProvider>
    </div>
  );
}

export default App;
