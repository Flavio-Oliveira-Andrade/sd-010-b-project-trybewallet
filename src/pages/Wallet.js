import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalDespesa: 0,
    };
    this.totalField = this.totalField.bind(this);
  }

  totalField() {
    const { expenses } = this.props;
    let totalDespesa = 0;
    expenses.forEach((element) => {
      totalDespesa
      += Number(element.value) * Number(element.exchangeRates[element.currency].ask);
    });
    this.setState({ totalDespesa });
  }

  render() {
    const { email } = this.props;
    const { totalDespesa } = this.state;
    return (
      <main>
        <header data-testid="email-field">
          {email}
          <span>Despesas:</span>
          <span data-testid="total-field">{totalDespesa}</span>
        </header>
        <section>
          <span>
            Cambio:
            <select data-testid="header-currency-field">
              <option value="BRL">BRL</option>
              <option value="USA">USA</option>
            </select>
          </span>
        </section>
        <Form totalField={ this.totalField } />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.number,
};

Wallet.defaultProps = {
  email: '',
  expenses: 0,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
