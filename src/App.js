import React from 'react';
import RegistersHomePage from './components/registersHomePage.js';
import Courses from './components/courses.js'
import './App.css';
import Login from './components/login.js';
import Statistics from './components/statistics.js';
import { Switch, BrowserRouter as Router,  Route } from 'react-router-dom';

function App() {
  return (<div>

    <Router>
      <Switch>
        <Route path="/registersHomePage">
          <RegistersHomePage />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/courses">
          <Courses/> 
          </Route>
        <Route path="/statistics">
          <Statistics/>
          </Route>

       

      </Switch>
    </Router>


  </div>)
}

export default App;
