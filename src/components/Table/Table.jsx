import React from 'react';
import { useSelector } from 'react-redux';

function Table() {
  const expenses = useSelector((state) => state.wallet.expenses);
  return (
    <div>
      
    </div>
  )
}

export default Table;
