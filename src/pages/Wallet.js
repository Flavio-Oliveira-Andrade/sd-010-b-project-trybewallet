import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FormsExpenses from '../components/componentswallet/FormsExpenses';
import Header from '../components/componentswallet/Header';

function Wallet() {
  const [totalDespesas] = useState(0);
  const [cambio] = useState('BRL');
  const emailUser = useSelector((state) => state.user.email);

  const [inputValue, setInputValue] = useState(0);
  const [inputDescription, setInputDescripion] = useState('');

  function handleInputValueChange(newValue) {
    setInputValue(newValue);
  }

  function handleInputDescriptionChange(newDescription) {
    setInputDescripion(newDescription);
  }

  return (
    <>
      <Header>
        <span data-testid="email-field">{`Email: ${emailUser}`}</span>
        <span data-testid="total-field">{`Total das despesas: ${totalDespesas}`}</span>
        <span data-testid="header-currency-field">{`Moeda: ${cambio}`}</span>
      </Header>

      <FormsExpenses
        onInputValueChange={ inputValue }
        onInputDescriptionChange={ inputDescription }
        handleInputValueChange={ handleInputValueChange }
        handleInputDescriptionChange={ handleInputDescriptionChange }
      />
    </>
  );
}

export default Wallet;
