import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/users">
              Gerenciar Usuários
            </Link>
          </li>
          <li>
            <Link to="/create-user">
              Buscar Usuário
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
