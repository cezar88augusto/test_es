import data from '../back-end/db.json'

const INITIAL_STATE = {
  allUsers: data
};

function usersReducer(state = INITIAL_STATE, action) {
  const { type, data, id, user } = action;
  switch (type) {
    case 'READ_USERS':
      return { ...state, data }
    case 'ADD_USER':
      return { ...state, allUsers: [...state.allUsers, user] }
    case 'DELETE_USER':
      return { ...state, allUsers: [...state.allUsers.filter((user) => user.id !== id)] };
    default:
      return state;
  }
}

export default usersReducer;
