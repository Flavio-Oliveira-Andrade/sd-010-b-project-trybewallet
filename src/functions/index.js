// import React from 'react';
// ---------------------------------------------------------------------------------------------
// FormsWallet
export function sumExpenses(expenses) {
  const listExpenses = expenses
    .map(({ value, currency, exchangeRates }) => exchangeRates[currency].ask * value);
  const totalExpenses = listExpenses.reduce((acc, value) => acc + value, 0).toFixed(2);
  // localStorage.setItem('LScart', JSON.stringify(updatedCart));
  return totalExpenses;
}
// ---------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------
// TableWallet
export function removeExpense(id, expenses) {
  const listExpenses = [...expenses];
  const updatedExpenses = listExpenses.filter((item) => item.id !== id);
  // localStorage.setItem('LScart', JSON.stringify(updatedCart));
  return updatedExpenses;
}

export function editExpense(id, expenses) {
  const listExpenses = [...expenses];
  const editingExpense = listExpenses.find((item) => item.id === id);
  const updatedExpenses = removeExpense(id, expenses);
  // localStorage.setItem('LScart', JSON.stringify(updatedCart));
  return {
    updatedExpenses,
    editingExpense,
    editedExpense: true,
  };
}

// ---------------------------------------------------------------------------------------------
