import React from 'react';
import InputDescription from './InputDescription';
import InputValue from './InputValue';
import InputSelectMoeda from './InputSelectMoeda';
import InputSelectMethod from './InputSelectMethod';
import InputSelectTag from './InputSelectTag';

function FormsExpenses({
  description = '',
  onChangeDescription = null,
  value = 0,
  onChangeValue = '',
  inputMoeda = 'USD',
  onChangeMoeda = null,
  inputMethod = 'Dinheiro',
  onChangeMethod = null,
  inputTag = 'Alimentação',
  onChangeTag = null,
}) {
  return (
    <div>
      <form>
        <InputValue value={ value } onChangeValue={ onChangeValue } />
        <InputDescription
          description={ description }
          onChangeDescription={ onChangeDescription }
        />

        <InputSelectMoeda inputMoeda={ inputMoeda } onChangeMoeda={ onChangeMoeda } />

        <InputSelectMethod
          inputMethod={ inputMethod }
          onChangeMethod={ onChangeMethod }
        />
        <InputSelectTag inputTag={ inputTag } onChangeTag={ onChangeTag } />
      </form>
    </div>
  );
}

export default FormsExpenses;
