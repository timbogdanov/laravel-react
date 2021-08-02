import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      
    
      <Switch>
        <Route exact path="/">

        </Route>

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        </Switch>
      </Router>
    </div>
  )
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}