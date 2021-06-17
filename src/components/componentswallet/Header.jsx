import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const emailUser = useSelector((state) => state.user.email);
  const expenses = useSelector((state) => state.wallet.expenses);

  // const moeda = expenses.map(({ currency }) => currency);
  const valor = expenses.map(({ value }) => value);

  const soma = valor.reduce((acc, curr) => {
    const convert = parseFloat(curr);
    return convert + acc;
  }, 0);

  return (
    <div>
      <span data-testid="email-field">{`Email: ${emailUser}`}</span>
      <span data-testid="total-field">{`Total das despesas: ${soma}`}</span>
      <span
        data-testid="header-currency-field"
      >
        Moeda: BRL
      </span>
    </div>
  );
}

export default Header;
