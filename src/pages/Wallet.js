import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/componentswallet/Header';

function Wallet() {
  const [totalDespesas] = useState(0);
  const [cambio] = useState('BRL');
  const [inputValue, setInputValue] = useState(0);
  const emailUser = useSelector((state) => state.user.email);

  return (
    <Header>
      <p data-testid="email-field">{`Email: ${emailUser}`}</p>
      <p data-testid="total-field">{`Total das despesas: ${totalDespesas}`}</p>
      <p data-testid="header-currency-field">{`Moeda: ${cambio}`}</p>
    </Header>
  );
}

export default Wallet;
