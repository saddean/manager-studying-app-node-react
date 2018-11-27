import React, { Component } from 'react';
import './App.css';
import Login from './container/Login/Login';
import Dashboard from './container/Dashboard/Dashboard';
import RequireAuth from './components/Auth/requireAuth'
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import history from './utils/history'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" component={RequireAuth(Dashboard)} />
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App

