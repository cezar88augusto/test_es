import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Table from './components/Table';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/menu" component={ Menu } />
      <Route exact path="/users-management" component={ Table } />
      <Route exact path="/search-users" component={ SearchForm } />
    </Switch>
  );
}

export default App;
