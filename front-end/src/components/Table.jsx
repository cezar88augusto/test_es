import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUserAction, addUserAction, editingUserAction, editedUserAction } from '../actions/index'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 8,
      nome: '',
      sobrenome: '',
      tipoUsuario: '',
      email: '',
      senha: '',
      ativo: '',
      editingUser: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addUserState = this.addUserState.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addUserState() {
    const { addUser } = this.props;
    this.setState(prevState => {
      return {
        ...prevState,
        id: prevState.id + 1
      }
    })
    addUser(this.state)
    this.clearInputs()
  }

  editUserState() {
    const { editingId, arrayOfUsers, confirmUpdateUser } = this.props
    const { nome, sobrenome, tipoUsuario, email, senha, ativo } = this.state
    const editedUser = arrayOfUsers.filter((user) => user.id === editingId)[0];
    editedUser.nome = nome;
    editedUser.sobrenome = sobrenome;
    editedUser.tipoUsuario = tipoUsuario;
    editedUser.email = email;
    editedUser.senha = senha;
    editedUser.ativo = ativo;
    confirmUpdateUser(editedUser)
    this.clearInputs()

  }

  clearInputs() {
    let inputs = document.querySelectorAll('.input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  };

  render() {

    const { arrayOfUsers, deleteUser, updateUser, isEditing, editingUser } = this.props

    const editingButton = (
      <button
        onClick={() => this.editUserState()}
      >
        Editar usuáro
      </button>
    );

    const addingButton = (
      <button
        onClick={() => this.addUserState()}
      >
        Adicionar usuáro
      </button>
    );

    return (
      <div>
        <Link to="/menu">
          Voltar
        </Link>
        <form>
          <label>
            Nome:
            <input
              className="input"
              type="text"
              name="nome"
              placeholder={isEditing ? editingUser[0].nome : ''}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Sobrenome:
            <input
              className="input"
              type="text"
              name="sobrenome"
              placeholder={isEditing ? editingUser[0].sobrenome : ''}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              className="input"
              type="email"
              name="email"
              placeholder={isEditing ? editingUser[0].email : ''}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Senha:
            <input
              className="input"
              type="password"
              name="senha"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Tipo Usuário:
            <select
              className="input"
              name="tipoUsuario"
              value={isEditing ? editingUser[0].tipoUsuario : ''}
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="Administrador">Administrador</option>
              <option value="Usuário padrão">Usuário padrão</option>
            </select>
          </label>
          <br />
          <label>
            Usuário Ativo:
            <select
              className="input"
              name="ativo"
              value={isEditing ? editingUser[0].ativo : ''}
              onChange={this.handleChange}
            >
              <option value=''></option>
              <option value='Sim'>Sim</option>
              <option value='Não'>Não</option>
            </select>
          </label>
        </form>
        {isEditing ? editingButton : addingButton}
        <h1>List Users</h1>
        <table>
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Tipo de Usuário</th>
              <th>Ativo</th>
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
                  <td>{ativo === 'Sim' ? "Sim" : "Não"}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => updateUser(id, true)}
                      disabled={isEditing}
                    >
                      O
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => deleteUser(id)}
                      disabled={isEditing}
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
  arrayOfUsers: state.users.allUsers,
  isEditing: state.users.isEditing,
  editingId: state.users.editingId,
  editingUser: state.users.editingUser
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUserAction(user)),
  deleteUser: (id) => dispatch(deleteUserAction(id)),
  updateUser: (id) => dispatch(editingUserAction(id, true)),
  confirmUpdateUser: (user) => dispatch(editedUserAction(user, false))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
