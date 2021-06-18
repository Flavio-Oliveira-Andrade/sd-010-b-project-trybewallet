import React from 'react';

function InputSelectMethod({
  inputMethod = 'Dinheiro',
  onChangeMethod = null,
}) {
  return (
    <div>
      <label htmlFor="method">
        Método de pagamento
        <select
          name="method"
          id="method"
          value={ inputMethod }
          onChange={ onChangeMethod }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    </div>
  );
}

export default InputSelectMethod;
