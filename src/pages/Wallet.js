import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';

function Wallet() {
  const [field, setField] = useState(0);
  const emailUser = useSelector((state) => state.user.email);
  const [form, setForm] = useState({
    id: 0,
    value: 0,
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
    exchangeRates: {},
  });

  

  return (
    <>
      <Header emailUser={emailUser} field={field} />
      <Form />
    </>
  );
}

export default Wallet;
