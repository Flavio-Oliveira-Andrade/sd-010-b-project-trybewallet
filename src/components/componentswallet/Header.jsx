import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const emailUser = useSelector((state) => state.user.email);
  const expenses = useSelector((state) => state.wallet.expenses);

  console.log(expenses);

  const moeda = expenses.map(({ currency }) => currency);

  return (
    <div>
      <span data-testid="email-field">{`Email: ${emailUser}`}</span>
      <span data-testid="total-field">{`Total das despesas: ${expenses.value}`}</span>
      <span
        data-testid="header-currency-field"
      >
        {`Moeda: ${moeda}`}
      </span>
    </div>
  );
}

export default Header;
