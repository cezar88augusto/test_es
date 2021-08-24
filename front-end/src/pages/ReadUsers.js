import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUserAction } from '../actions/index'

class ReadUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  componentDidMount() {
    const { arrayOfUsers } = this.props
    console.log(arrayOfUsers)
  }

  render() {
    const { arrayOfUsers, deleteUser } = this.props
    return (
      <div>
        <Link to="/management">
          Voltar
        </Link>
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Tipo de Usuário</th>
              <th>Usuário Ativo</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          {<tbody>
            {arrayOfUsers.map(
              ({
                id,
                nome,
                sobrenome,
                tipoUsuario,
                ativo,
              }) => (
                <tr key={id}>
                  <td>{nome + " " + sobrenome}</td>
                  <td>{tipoUsuario}</td>
                  <td>{ativo ? "Sim" : "Não"}</td>
                  <td>
                    <button
                      data-testid="edit-btn"
                      type="button"
                    >
                      O
                    </button>
                  </td>
                  <td>
                    <button
                      data-testid="delete-btn"
                      type="button"
                      onClick={() => deleteUser(id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrayOfUsers: state.users.allUsers
});

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(deleteUserAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReadUsers);
