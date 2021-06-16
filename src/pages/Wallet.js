import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionTotal } from '../actions/wallet';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    if (expenses.length < 1) {
      return 0;
    }
    let total = 0;
    expenses.forEach((element) => {
      let number = parseFloat(element.value);
      // captura os valores do obj que a API tras
      const values = Object.values(element.exchangeRates);
      // encontra a cotação da moeda que foi selecionada
      const moeda = values.find((coin) => coin.code === element.currency);
      // multiplica a moeda local pela cotação
      number *= moeda.ask;
      total += number;
    });
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    const LOCAL_CURRENCY = 'BRL';
    return (
      <>
        <header className="header">
          <h3 data-testid="email-field">
            Email:
            {' '}
            { email }
          </h3>
          <h3 data-testid="total-field">
            Despesa Total:
            {' '}
            { this.totalExpenses() }
          </h3>
          <h3 data-testid="header-currency-field">{ LOCAL_CURRENCY }</h3>
        </header>
        <Form />
        <Table />
      </>
    );
  }
}

Wallet.defaultProps = {
  expenses: {},
};

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf(PropTypes.string),
};

const mapDispathToProps = (dispatch) => ({
  totalExpenses: (total) => dispatch(actionTotal(total)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispathToProps)(Wallet);
