import SET_LOGIN from './types';

export default function setLogin(values) {
  return {
    type: SET_LOGIN,
    payload: values,
  };
}
