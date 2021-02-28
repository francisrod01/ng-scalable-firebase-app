/* tslint:disable:max-line-length */
export const regex = {
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*([0-9]|[^\w\s]))/g,
  lating: /^[A-Za-z-s]+$/,
  numbers: /^\d+$/,
  latinAndNumbers: /^[A-Za-z0-9]+$/,
  latinAndSpaces: /^[a-zA-Z\s]*$/,
  phone: /^[0-9-]+$/,
  safe: /^([\sA-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])*$/,
};

export const regexErrors = {
  email: 'Email is incorrect',
  password: 'Password must contain an upper case letter, a lower case letter and a number',
  latin: 'Latin letters only',
  numbers: 'Digits only',
  latinAndNumbers: 'Latin letters and digits only',
  latinAndSpaces: 'Latin letters and spaces only',
  phone: 'Phone number is incorrect',
  safe: 'Latin letters, numbers and special characters only',
};
