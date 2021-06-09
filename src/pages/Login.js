import React, { useState } from 'react';
import ButtonEnter from '../components/componentslogin/ButtonEnter';
import InputEmail from '../components/componentslogin/InputEmail';
import InputPassword from '../components/componentslogin/InputPassword';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(newEmail) {
    setEmail(newEmail);
  }

  function handlePasswordChange(newPassword) {
    setPassword(newPassword);
  }

  function clickEnter() {
    console.log('clicou');
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
        enterLogin={ clickEnter }
        disabledEnter={ validetLogin }
      />
    </>
  );
}

export default Login;
