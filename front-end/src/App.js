import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Table from './components/Table';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/management" component={ Menu } />
      <Route exact path="/users" component={ Table } />
    </Switch>
  );
}

export default App;
