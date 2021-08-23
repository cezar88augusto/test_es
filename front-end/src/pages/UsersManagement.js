import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {

    return (
      <div>
        <ul>
          <li>
            <Link to="/users">
              Listar Usuários
            </Link>
          </li>
          <li>
            <Link to="/create-user">
              Criar Usuário
            </Link>
          </li>
          <li>
            <Link to="/update-user">
              Atualizar Usuário
            </Link>
          </li>
          <li>
            <Link to="/delete-user">
              Deletar Usuário
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
