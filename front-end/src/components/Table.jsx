import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUserAction, addUserAction, editingUserAction, editedUserAction, cancelEditingUserAction } from '../actions/index';
import InputsForm from './InputsForm';
import UserCard from './UserCard';

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
    this.cancelEditUserState = this.cancelEditUserState.bind(this);
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
    const { editingId, arrayOfUsers, confirmUpdateUser } = this.props;
    const { nome, sobrenome, tipoUsuario, email, senha, ativo } = this.state;
    const editedUser = arrayOfUsers.filter((user) => user.id === editingId)[0];
    editedUser.nome = nome;
    editedUser.sobrenome = sobrenome;
    editedUser.tipoUsuario = tipoUsuario;
    editedUser.email = email;
    editedUser.senha = senha;
    editedUser.ativo = ativo;
    confirmUpdateUser(editedUser);
    this.clearInputs();
  }

  clearInputs() {
    let inputs = document.querySelectorAll('.input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  };

  cancelEditUserState() {
    const { cancelUpdate } = this.props;
    this.clearInputs()
    cancelUpdate()
  }

  render() {
    const { arrayOfUsers, deleteUser, updateUser, isEditing, editingUser } = this.props

    const cancelButton = (
      <button
        onClick={() => this.cancelEditUserState()}
      >
        Cancelar
      </button>
    )

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

        <InputsForm
          isEditing={isEditing}
          editingUser={editingUser}
          handleChange={this.handleChange}
        />

        {isEditing ? editingButton : addingButton}
        {isEditing ? cancelButton : null}

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
              (user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  deleteUser={deleteUser}
                  updateUser={updateUser}
                  isEditing={isEditing}
                />
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
  confirmUpdateUser: (user) => dispatch(editedUserAction(user, false)),
  cancelUpdate: () => dispatch(cancelEditingUserAction(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
