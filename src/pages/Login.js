import React from 'react';
import InputEmail from '../components/ComponentsLogin/InputEmail';
import InputPassword from '../components/ComponentsLogin/InputPassword';

export default function Login() {
  return (
    <>
      <InputEmail />
      <InputPassword />
      <ButtonEnter />
    </>
  );
}
