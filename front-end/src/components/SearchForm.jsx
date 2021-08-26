import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      filteredNames: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.filteredUser = this.filteredUser.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.filteredUser()
  }

  filteredUser() {
    const { arrayOfUsers } = this.props;
    const { nome } = this.state;
    let filteredUser = arrayOfUsers.filter((user) =>
      user.nome.toLowerCase().includes(nome.toLowerCase()))
    this.setState({ filteredNames: filteredUser })
  }

  render() {
    const { filteredNames, nome } = this.state;
    return (
      <div>
        <Link to="/menu">
          Voltar
        </Link>
        <form>
          <label>
            Buscar Usuário pelo nome:
            <input
              className="input"
              type="text"
              name="nome"
              onChange={this.handleChange}
            />
          </label>
        </form>
        {nome !== '' ?
          <div>
            {filteredNames.map(
              ({ id, nome, sobrenome, email, tipoUsuario, ativo }) => (
                <div key={id}>
                  <p>Nome: {nome + " " + sobrenome}</p>
                  <p>Email: {email}</p>
                  <p>Tipo: {tipoUsuario}</p>
                  <p>Ativo: {ativo}</p>
                </div>
              ),
            )}
          </div> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrayOfUsers: state.users.allUsers,
});


export default connect(mapStateToProps)(SearchForm);
