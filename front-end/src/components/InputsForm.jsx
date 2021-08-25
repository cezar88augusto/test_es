import React from 'react';

class InputsForm extends React.Component {
  render() {
    const { isEditing, editingUser, handleChange } = this.props;
    return (
      <div>
        <form>
          <label>
            Nome:
            <input
              className="input"
              type="text"
              name="nome"
              placeholder={isEditing ? editingUser[0].nome : ''}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Senha:
            <input
              className="input"
              type="password"
              name="senha"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Tipo Usuário:
            <select
              className="input"
              name="tipoUsuario"
              value={isEditing ? editingUser[0].tipoUsuario : ''}
              onChange={handleChange}
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
              onChange={handleChange}
            >
              <option value=''></option>
              <option value='Sim'>Sim</option>
              <option value='Não'>Não</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default InputsForm;
