import React from 'react';

function InputSelectMethod({
  inputMethod = 'Dinheiro',
  onChangeMethod = null,
}) {
  return (
    <div>
      <label htmlFor="select-id">
        Método de pagamento
        <select
          name="method"
          id="select-id"
          value={ inputMethod }
          onChange={ onChangeMethod }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    </div>
  );
}

export default InputSelectMethod;
