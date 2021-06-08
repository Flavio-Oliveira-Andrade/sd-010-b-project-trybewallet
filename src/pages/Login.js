import React from 'react';
import ButtonEnter from '../components/ComponentsLogin/ButtonEnter';
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
