import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import UsersManagement from './pages/UsersManagement';
import ReadUsers from './pages/ReadUsers';
import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser';
import DeleteUser from './pages/DeleteUser';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/management" component={ UsersManagement } />
      <Route exact path="/users" component={ ReadUsers } />
      <Route exact path="/create-user" component={ CreateUser } />
      <Route exact path="/update-user" component={ UpdateUser } />
      <Route exact path="/delete-user" component={ DeleteUser } />
    </Switch>
  );
}

export default App;
