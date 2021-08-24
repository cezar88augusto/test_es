import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUserAction, addUserAction } from '../actions/index'
import data from '../../src/back-end/db.json'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: data.length+1,
      nome: '',
      sobrenome: '',
      tipoUsuario: 'Usuário padrão',
      email: '',
      senha: '',
      ativo: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.addUserState = this.addUserState.bind(this);

  }

  componentDidMount() {
    const { arrayOfUsers } = this.props
    console.log(arrayOfUsers)
  }

  componentDidUpdate(){
    const { arrayOfUsers } = this.props
    console.log(arrayOfUsers)
  }

  handleChange(event) {
    const { name, value } = event.target;
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

  render() {
    const { arrayOfUsers, deleteUser } = this.props
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
              onChange={ this.handleChange }
            />
        </label>
        <br/>
        <label>
            Sobrenome:
            <input
              type="text"
              name="sobrenome"
              onChange={ this.handleChange }
            />
        </label>
        <br/>
        <label>
            Email:
            <input
              type="email"
              name="email"
              onChange={ this.handleChange }
            />
        </label>
        <br/>
        <label>
            Senha:
            <input
              type="password"
              name="senha"
              onChange={ this.handleChange }
            />
        </label>
        <br/>
        <label>
            Tipo Usuário:
            <select
              name="tipoUsuario"
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
              onChange={ this.handleChange }
            >
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </label>
        </form>
        <button
          onClick={() => this.addUserState()}
        >
          Cadastrar Usuário
        </button>
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
  addUser: (user) => dispatch(addUserAction(user)),
  deleteUser: (id) => dispatch(deleteUserAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
