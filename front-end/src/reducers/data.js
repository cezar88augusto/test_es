import data from '../../src/data/db.json'

const INITIAL_STATE = {
  allUsers: data,
  isEditing: false,
  editingId: '',
  editingUser: {}
};

function usersReducer(state = INITIAL_STATE, action) {
  const { type, data, id, user, bool } = action;
  switch (type) {
    case 'READ_USERS':
      return { ...state, data }
    case 'ADD_USER':
      return { ...state, allUsers: [...state.allUsers, user] }
    case 'DELETE_USER':
      return { ...state, allUsers: [...state.allUsers.filter((user) => user.id !== id)] };
    case 'EDITING_USER':
      return { ...state, isEditing: bool, editingId: action.editingId, editingUser: {...state.allUsers.filter((user) => user.id === action.editingId)} }
    case 'EDITED_USER':
      return {
        ...state,
        isEditing: bool,
        allUsers: [...state.allUsers.map((elem) => {
          if (elem.id === action.editingId) {
            return {
              ...elem,
              user,
            };
          }
          return elem;
        })],
      };
    default:
      return state;
  }
}

export default usersReducer;
