import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Wallet() {
  const [field, setField] = useState(0);
  const [cambio, setCambio] = useState('BRL');
  const emailUser = useSelector((state) => state.user.email);

  return (
    <>
      <header>
        <h2 data-testid="email-field">{emailUser}</h2>
        <h3 data-testid="total-field">{field}</h3>
        <h3 data-testid="header-currency-field">{cambio}</h3>
      </header>
      <section>
        <button 
          type="button"
          onClick={ () => {
            setCambio('BRL');
            setField(0);
          } }
        >
          Ola
        </button>
      </section>
    </>
  );
}

export default Wallet;
