import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {expenses.map((entry, index) => (
          <tr key={ index }>
            <td>{entry.description}</td>
            <td>{entry.tag}</td>
            <td>{entry.method}</td>
            <td>{entry.value}</td>
            <td>{entry.exchangeRates[entry.currency].name.split('/')[0]}</td>
            <td>{parseFloat(entry.exchangeRates[entry.currency].ask).toFixed(2)}</td>
            <td>
              {parseFloat(entry.value
                * entry.exchangeRates[entry.currency].ask).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button type="button" data-testid="delete-btn">Excluir</button>
              <button type="button" data-testid="edit-btn">Editar</button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Table);
