import React from 'react';
import { connect, useSelector } from 'react-redux';

const TBody = () => {
  // const { expenses, itensPrices } = this.props;
  // const TEN_MILISECONDS = 1000;
  // setTimeout(() => {}, TEN_MILISECONDS);
  const { expenses, itensPrices } = useSelector((state) => state.wallet);
  console.log('expenses:');
  console.log(expenses);
  const tBody = expenses.map((expense) => {
    const {
      currency, description, exchangesRates, id, method, tag, value,
    } = expense;
    const { ask, name } = expense.exchangesRates[currency];
    const conversionCurrency = name.split('/')[0];
    const coin = name.split('/')[1];

    return (
      <tr key={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{coin}</td>
        <td>{ask}</td>
        <td>{itensPrices[id]}</td>
        <td>{conversionCurrency}</td>
        <td>
          <button
            type="button"
            onClick={ () => console.log('me clicaram aqui ó') }
            data-testid="delete-btn"
          >
            Deletar
          </button>
        </td>
      </tr>
    );
  });
  return (tBody);
};

const mapStateToProps = ({ wallet: { expenses, itensPrices } }) => ({
  expenses,
  itensPrices,
});
export default connect(mapStateToProps)(TBody);
