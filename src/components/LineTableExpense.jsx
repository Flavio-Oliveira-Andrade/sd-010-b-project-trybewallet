import PropTypes from 'prop-types';
import React from 'react';

class LineTableExpense extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     index: 0,
  //   };
  // }

  render() {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      return (
        <tbody>
          {expenses.map((gastos) => (
            <tr key={ gastos.id }>
              <td>{gastos.description}</td>
              <td>{gastos.tag}</td>
              <td>{gastos.method}</td>
              <td>{gastos.value}</td>
              <td>{gastos.exchangeRates[gastos.currency].name}</td>
              <td>{(gastos.exchangeRates[gastos.currency].ask * 1).toFixed(2)}</td>
              <td>
                {(gastos
                  .value * gastos.exchangeRates[gastos.currency].ask).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button type="button">x</button>
                <button type="button">v</button>
              </td>
            </tr>
          ))}
        </tbody>
      );
    }
    return null;
  }
}

LineTableExpense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default LineTableExpense;
