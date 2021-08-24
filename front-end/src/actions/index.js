export const login = (email) => ({
  type: 'LOGIN',
  email,
});

export const getUsers = (data) => ({
  type: 'READ_USERS',
  data
})

export const deleteUserAction = (id) => ({
  type: 'DELETE_USER',
  id
})