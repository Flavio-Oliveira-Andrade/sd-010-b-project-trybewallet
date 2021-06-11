import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormsExpenses from '../components/componentswallet/FormsExpenses';
import Header from '../components/componentswallet/Header';
import ButtonAddExpenses from '../components/componentswallet/ButtonAddExpenses';
import { saveExpenses } from '../actions/index';

function Wallet() {
  const emailUser = useSelector((state) => state.user.email);
  const [totalDespesas] = useState(0);
  const [cambio] = useState('BRL');
  const [inputValue, setInputValue] = useState(0);
  const [inputDescription, setInputDescripion] = useState('');

  const dispatch = useDispatch();
  function handleInputValueChange(newValue) {
    setInputValue(newValue);
  }
  function handleInputDescriptionChange(newDescription) {
    setInputDescripion(newDescription);
  }

  const getRequest = useCallback(async () => {
    dispatch(saveExpenses());
  }, [dispatch]);

  useEffect(() => {
    getRequest();
  }, [getRequest]);

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
      <ButtonAddExpenses handleOnClick={ getRequest } />
    </>
  );
}

export default Wallet;
