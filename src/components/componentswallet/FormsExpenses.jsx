import React, { useState } from 'react';
import InputDescriptionExpenses from './InputDescriptionExpenses';
import InputValue from './InputValue';
import InputSelectMoeda from './InputSelectMoeda';
import InputSelectMethod from './InputSelectMethod';
import InputSelectExpenses from './InputSelectExpenses';

function FormsExpenses() {
  const [inputValue, setInputValue] = useState(0);
  const [inputDescription, setInputDescripion] = useState('');

  function handleInputValueChange(newValue) {
    setInputValue(newValue);
  }

  function handleInputDescriptionChange(newDescription) {
    setInputDescripion(newDescription);
  }
  return (
    <div>
      <form>
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

        <InputSelectMoeda
          labelDescription="Moeda"
        />

        <InputSelectMethod
          labelDescription="Método de pagamento"
        />

        <InputSelectExpenses
          labelDescription="Tag"
        />
      </form>
    </div>
  );
}

export default FormsExpenses;
