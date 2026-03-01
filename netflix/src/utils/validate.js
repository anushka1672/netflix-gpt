export const checkValidaData = (Email, password,Name) => {

    const isNameValid = /^[A-Za-z ]{2,30}$/.test(Name);


  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid )  return "name is not valid"
  if (!isEmailValid)  return "Email is not valid"
  if (!isPasswordValid)  return "password is not valid"

  return null;
}
;
