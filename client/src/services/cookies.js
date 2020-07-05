import cookies from 'react-cookies';
export const getToken = () => {
  return cookies.load('auth');
};

export const getUser = () => {
  if (getToken()) {
    return JSON.parse(atob(getToken().split('.')[1])).user;
  }
};
