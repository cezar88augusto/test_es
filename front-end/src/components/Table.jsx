import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUserAction, addUserAction, editingUserAction, editedUserAction } from '../actions/index'
import data from '../../src/data/db.json'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: data.length+1,
      nome: '',
      sobrenome: '',
      tipoUsuario: '',
      email: '',
      senha: '',
      ativo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addUserState = this.addUserState.bind(this);

  }

  handleChange(event) {
    const { name, value } = event.target;
    console.log(value)
    this.setState({ [name]: value });
  }

  addUserState() {
    const { addUser } = this.props;
    this.setState(prevState =>{
      return{
           ...prevState,
           id : prevState.id +1
      }
   })
   addUser(this.state)
  }

  editUserState() {
    const { editingId, arrayOfUsers, confirmUpdateUser } = this.props
    const { 
      nome,
      sobrenome,
      tipoUsuario,
      email,
      senha,
      ativo,
      } = this.state
      arrayOfUsers[editingId].nome = nome;
      arrayOfUsers[editingId].sobrenome = sobrenome;
      arrayOfUsers[editingId].tipoUsuario = tipoUsuario;
      arrayOfUsers[editingId].email = email;
      arrayOfUsers[editingId].senha = senha;
      arrayOfUsers[editingId].ativo = ativo;

      confirmUpdateUser(arrayOfUsers[editingId])
  }

  render() {

    const { arrayOfUsers, deleteUser, updateUser, isEditing, editingId } = this.props

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
        <Link to="/management">
          Voltar
        </Link>
        <form>
        <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={isEditing ? arrayOfUsers[editingId].nome : ''}
              onChange={ this.handleChange }
            />
        </label>
        <br/>
        <label>
            Sobrenome:
            <input
              type="text"
              name="sobrenome"
              value={isEditing ? arrayOfUsers[editingId].sobrenome : ''}
              onChange={ this.handleChange }
            />
        </label>
        <br/>
        <label>
            Email:
            <input
              type="email"
              name="email"
              value={isEditing ? arrayOfUsers[editingId].email : ''}
              onChange={ this.handleChange }
            />
        </label>
        <br/>
        <label>
            Senha:
            <input
              type="password"
              name="senha"
              value={isEditing ? arrayOfUsers[editingId].senha : ''}
              onChange={ this.handleChange }
            />
        </label>
        <br/>
        <label>
            Tipo Usuário:
            <select
              name="tipoUsuario"
              value={isEditing ? arrayOfUsers[editingId].tipoUsuario : ''}
              onChange={ this.handleChange }
            >
              <option value=""></option>
              <option value="Administrador">Administrador</option>
              <option value="Usuário padrão">Usuário padrão</option>
            </select>
          </label>
          <br/>
          <label>
            Usuário Ativo:
            <select
              name="ativo"
              value={isEditing ? arrayOfUsers[editingId].ativo : ''}
              onChange={ this.handleChange }
            >
              <option value=''></option>
              <option value='Sim'>Sim</option>
              <option value='Não'>Não</option>
            </select>
          </label>
        </form>
        { isEditing ? editingButton : addingButton}
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
                      data-testid="edit-btn"
                      type="button"
                      onClick={() => updateUser(id,true)}
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
  arrayOfUsers: state.users.allUsers,
  isEditing: state.users.isEditing,
  editingId: state.users.editingId
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUserAction(user)),
  deleteUser: (id) => dispatch(deleteUserAction(id)),
  updateUser: (id) => dispatch(editingUserAction(id, true)),
  confirmUpdateUser: (user) => dispatch(editedUserAction(user,false))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
