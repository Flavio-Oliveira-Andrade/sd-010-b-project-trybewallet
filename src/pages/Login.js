import React, { useState } from 'react';

import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState(false);

  function verifyInputs() {
    // Essa parte do reg peguei no stackoverflow https://pt.stackoverflow.com/questions/348854/fun%C3%A7%C3%A3o-em-javascript-para-valida%C3%A7%C3%A3o-de-email-n%C3%A3o-entra-no-else#:~:text=A%20fun%C3%A7%C3%A3o%20replace%20serve%20para,o%20retorno%20de%20uma%20function%20).
    // eslint-disable-next-line
    const reg = /\S+@\S+\.\S+/;
    const maxLength = 6;

    if (reg.test(email) === true && password.length >= maxLength) {
      setVerify(true);
    } else {
      setVerify(false);
    }
  }

  return (
    <div className="container">
      <input
        data-testid="email-input"
        type="email"
        placeholder="Email"
        onChange={ ({ target }) => {
          setEmail(target.value);
          verifyInputs();
        } }
        required
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="Senha"
        onChange={ ({ target }) => {
          setPassword(target.value);
          verifyInputs();
        } }
        required
      />
      <button disabled={ !verify } type="button">Entrar</button>
    </div>
  );
}

export default Login;
