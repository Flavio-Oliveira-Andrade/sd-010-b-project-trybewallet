import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormsExpenses from '../components/componentswallet/FormsExpenses';
import Header from '../components/componentswallet/Header';
import ButtonAddExpenses from '../components/componentswallet/ButtonAddExpenses';
import { saveRequest } from '../actions/index';
import objExpenses from '../helpers/initialState';
import Table from '../components/Table/Table';

function Wallet() {
  const [expenses, setExpenses] = useState(objExpenses);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setExpenses((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function setClick() {
    dispatch(saveRequest(expenses));
  }

  // const getRequest = useCallback(async () => {
  //   dispatch(saveRequest());
  // }, [dispatch]);

  function hadleChange() {
    // getRequest();
    setClick();
  }

  return (
    <>
      <Header />
      <FormsExpenses
        description={ expenses.description }
        onChangeDescription={ handleOnChange }
        value={ expenses.value }
        onChangeValue={ handleOnChange }
        inputMoeda={ expenses.currency }
        onChangeMoeda={ handleOnChange }
        inputMethod={ expenses.method }
        onChangeMethod={ handleOnChange }
        inputTag={ expenses.tag }
        onChangeTag={ handleOnChange }
      />
      <ButtonAddExpenses handleOnClick={ hadleChange } />
      <Table />
    </>
  );
}

export default Wallet;
