import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const emailUser = useSelector((state) => state.user.email);
  const expenses = useSelector((state) => state.wallet.expenses);

  console.log(expenses);

  const moeda = expenses.map(({ currency }) => currency);
  const valor = expenses.map(({ value }) => value);

  return (
    <div>
      <span data-testid="email-field">{`Email: ${emailUser}`}</span>
      <span data-testid="total-field">{`Total das despesas: ${valor}`}</span>
      <span
        data-testid="header-currency-field"
      >
        {`Moeda: ${moeda}`}
      </span>
    </div>
  );
}

export default Header;
