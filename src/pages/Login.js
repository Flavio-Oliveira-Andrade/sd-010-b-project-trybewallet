import React from 'react';
import ButtonEnter from '../components/componentslogin/ButtonEnter';
import InputEmail from '../components/componentslogin/InputEmail';
import InputPassword from '../components/componentslogin/InputPassword';

function Login() {
  return (
    <>
      <InputEmail />
      <InputPassword />
      <ButtonEnter />
    </>
  );
}

export default Login;
