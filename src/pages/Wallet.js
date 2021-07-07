import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';

function Wallet() {
  const [field, setField] = useState(0);
  const emailUser = useSelector((state) => state.user.email);

  return ( 
    <>
      <Header emailUser={ emailUser } field={ field } />
      <Form totalValue={ field } setTotalValue={ setField } />
      <button
        type="button"
        onClick={ () => {
          setField(1);
        } }
      >
        Opa
      </button>
    </>
  );
}

export default Wallet;
