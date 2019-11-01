import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import FixedMenuLayout from "./components/layouts/FixedMenu";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <FixedMenuLayout />
        <br />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Container style={{ marginTop: '7em' }}>
              <TodoForm />
              <TodoList/>
            </Container>
          </React.Fragment>
        )} />

        <Route exact path="/about" render={props => (
          <React.Fragment>
          <Container style={{ marginTop: '7em' }}>
            <About />
          </Container>
        </React.Fragment>          
        )} />
      </div>
    </div>
  </Router>
  );
}
