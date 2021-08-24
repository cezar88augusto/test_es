export const login = (email) => ({
  type: 'LOGIN',
  email,
});

export const getUsers = (data) => ({
  type: 'READ_USERS',
  data
})

export const addUserAction = (user) => ({
  type: 'ADD_USER',
  user
})

export const deleteUserAction = (id) => ({
  type: 'DELETE_USER',
  id
})

export const editingUserAction = (editingId, bool) => ({
  type: 'EDITING_USER',
  editingId,
  bool,
});

export const editedUserAction = (user, bool) => ({
  type: 'EDITED_USER',
  user,
  bool,
});