import React from "react";
import { Header } from './app/Header'
import { ChatMessageContainer } from './features/ChatMessageContainer'
import { TypeMessageForm } from './features/TypeMessageForm'
import { Footer } from './features/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Contact } from './pages/Conact'
import {About} from './pages/About'



function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact
            path='/'
            render={() => (
              <React.Fragment>
              <ChatMessageContainer/>
              <TypeMessageForm />
              </React.Fragment>
            )} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
