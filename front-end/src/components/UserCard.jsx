import React from 'react';

class UserCard extends React.Component {
  render() {
    const { user, deleteUser, updateUser, isEditing, isAdm } = this.props;
    const { id, nome, sobrenome, tipoUsuario, ativo } = user;
    return (
      <tr key={id}>
        <td>{nome + " " + sobrenome}</td>
        <td>{tipoUsuario}</td>
        <td>{ativo === 'Sim' ? "Sim" : "Não"}</td>
        <td>
          <button
            data-testid="edit-btn"
            type="button"
            onClick={() => updateUser(id, true)}
            disabled={isEditing || !isAdm}
          >
            O
          </button>
        </td>
        <td>
          <button
            data-testid="delete-btn"
            type="button"
            onClick={() => deleteUser(id)}
            disabled={isEditing || !isAdm}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default UserCard;
