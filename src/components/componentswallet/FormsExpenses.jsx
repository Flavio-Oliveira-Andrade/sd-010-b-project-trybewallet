import React from 'react';
import InputDescriptionExpenses from './InputDescriptionExpenses';
import InputValue from './InputValue';
import InputSelectMoeda from './InputSelectMoeda';
import InputSelectMethod from './InputSelectMethod';
import InputSelectExpenses from './InputSelectExpenses';

function FormsExpenses({
  onInputValueChange = null,
  handleInputValueChange = null,
  onInputDescriptionChange = null,
  handleInputDescriptionChange = null
}) {
  return (
    <div>
      <form>
        <InputValue
          labelDescription="Valor"
          inputValue={ onInputValueChange }
          onInputValueChange={ handleInputValueChange }
        />

        <InputDescriptionExpenses
          labelDescription="Descrição"
          inputValue={ onInputDescriptionChange }
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
