import data from '../../src/data/db.json'


const INITIAL_STATE = {
  email: '',
  isAdm: false
};

function loginReducer(state = INITIAL_STATE, action) {
  const { type, email } = action;
  switch (type) {
  case 'LOGIN':
    return { ...state, email, isAdm: data.some((user)=> user.email === email && user.tipoUsuario === 'Administrador') };
  default:
    return state;
  }
}

export default loginReducer;