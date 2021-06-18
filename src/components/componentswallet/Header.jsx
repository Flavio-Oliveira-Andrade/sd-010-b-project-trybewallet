import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const emailUser = useSelector((state) => state.user.email);
  const expenses = useSelector((state) => state.wallet.expenses);

  // codigo refatorado com a ajuda do Leandro Marcos
  const soma = expenses.reduce((acc, curr) => {
    acc += curr.value * curr.exchangeRates[curr.currency].ask;
    return acc;
  }, 0);

  const arredonda = (Math.round(soma * 100) / 100).toFixed(2);

  return (
    <div>
      <span data-testid="email-field">{`Email: ${emailUser}`}</span>
      <span data-testid="total-field">{`Total das despesas: ${arredonda}`}</span>
      <span
        data-testid="header-currency-field"
      >
        Moeda: BRL
      </span>
    </div>
  );
}

export default Header;
