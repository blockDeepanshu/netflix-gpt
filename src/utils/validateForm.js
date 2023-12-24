export const validateFormFields = (email, password) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

  if (!isEmailValid) {
    return "Email is not valid";
  }

  if (!isValidPassword) {
    return "Password is not valid";
  }

  return null;
};
