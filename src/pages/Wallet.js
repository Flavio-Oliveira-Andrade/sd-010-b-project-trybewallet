import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/componentswallet/Header';
import InputDescriptionExpenses
  from '../components/componentswallet/InputDescriptionExpenses';
import InputSelect from '../components/componentswallet/InputSelect';
import InputValue from '../components/componentswallet/InputValue';

function Wallet() {
  const [totalDespesas] = useState(0);
  const [cambio] = useState('BRL');
  const [inputValue, setInputValue] = useState(0);
  const [inputDescription, setInputDescripion] = useState('');
  const emailUser = useSelector((state) => state.user.email);

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

      <InputValue
        labelDescription="Valor"
        inputValue={ inputValue }
        onInputValueChange={ handleInputValueChange }
      />

      <InputDescriptionExpenses
        labelDescription="Descrição"
        inputValue={ inputDescription }
        onInputDescriptionChange={ handleInputDescriptionChange }
      />

      <InputSelect
        labelDescription="Moeda"
      />
    </>
  );
}

export default Wallet;
