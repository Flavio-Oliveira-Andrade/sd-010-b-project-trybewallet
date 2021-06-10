import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonEnter from '../components/componentslogin/ButtonEnter';
import InputEmail from '../components/componentslogin/InputEmail';
import InputPassword from '../components/componentslogin/InputPassword';
import saveEmailLogin from '../actions/index';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleEmailChange(newEmail) {
    setEmail(newEmail);
  }

  function handlePasswordChange(newPassword) {
    setPassword(newPassword);
  }

  function clickEnterSaveEmail() {
    dispatch(saveEmailLogin(email));
  }

  const minPassword = 6;
  const validetLogin = (!email.includes('.com')
    || !email.includes('@')
    || password.length < minPassword);

  return (
    <>
      <InputEmail
        placeholder="Insira seu email"
        inputValue={ email }
        onInputChange={ handleEmailChange }
      />
      <InputPassword
        placeholder="Insira sua senha"
        inputValuePassword={ password }
        onInputPasswordChange={ handlePasswordChange }
      />
      <ButtonEnter
        enterLogin={ clickEnterSaveEmail }
        disabledEnter={ validetLogin }
      />
    </>
  );
}

export default Login;
