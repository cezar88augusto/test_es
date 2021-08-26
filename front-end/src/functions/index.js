export const isValidEmail = (email) => {
  const emailRegex = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
  const isEmailValid = email.match(emailRegex);
  return isEmailValid;
}

export const isValidPassword = (password) => {
  const five = 5;
  if (password.length < five) return false
  return true
}