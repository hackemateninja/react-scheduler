import React from 'react';
import './App.css';
import {Header, Container, Form, Calendar} from "./components/Index";

function App() {
  return (
    <div className="App">
      <Form/>
      <Header/>
      <Container>
        <Calendar/>
      </Container>
    </div>
  );
}

export default App;
