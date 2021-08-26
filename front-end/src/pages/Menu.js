import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/users-management">
              Gerenciar Usuários
            </Link>
          </li>
          <li>
            <Link to="/search-users">
              Buscar Usuário
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
