import React from "react";
import { Header } from './app/Header'
import { ChatMessageContainer } from './features/ChatMessageContainer'
import {TypeMessageForm} from './features/TypeMessageForm'



function App() {
  return (
    <div>
      <Header/>
      <ChatMessageContainer/>
      <TypeMessageForm/>
    </div>
  );
}

export default App;
