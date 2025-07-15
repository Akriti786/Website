// src/auth/token.js
export const getToken = () => {
  const token = localStorage.getItem('jwt');
  return token && token !== 'undefined' ? token : null;
};

export const setToken = (token) => {
  localStorage.setItem('jwt', token);
};

export const clearToken = () => {
  localStorage.removeItem('jwt');
};
