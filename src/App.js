import React from 'react';
import RegistersHomePage from './components/registersHomePage.js';
import Courses from './components/coursesLast.js';
import NewUser from './components/newUser.js';
import './App.css';
import Login from './components/login.js';
import Statistics from './components/statistics.js';
import { Switch, BrowserRouter as Router,  Route } from 'react-router-dom';
import NewRegister from './components/newRegister.js';
import AreaOfInterest from './components/areaOfInterest.js';
import Reporting from './components/reporting.js';
import Maneger from './components/managerEditing.js';
import HomePage from './components/homePage.js';
import Student from './components/studentsHomePage.js';
import Crm from './components/crm.js';
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
          <Route path="/NewUser">
          <NewUser/>
          </Route>
          <Route path="/newRegister">
          <NewRegister/>
          </Route>
          <Route path="/areaOfInterest">
          <AreaOfInterest/>
          </Route>
          <Route path="/reporting">
          <Reporting/>
          </Route>
          <Route path="/maneger">
          <Maneger/>
          </Route>
          <Route path="/homePage">
          <HomePage/>
          </Route>
          <Route path="/studentHomePage">
          <Student/>
          </Route>
          <Route path="/crm">
          <Crm/>
          </Route>
       

      </Switch>
    </Router>


  </div>)
}

export default App;
