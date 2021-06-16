import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../Services/WalletForm';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    const { valor } = this.props;
    if (valor.length < 1) {
      return 0;
    }
    let total = 0;
    valor.forEach((element) => {
      let number = parseFloat(element.value);
      const values = Object.values(element.exchangeRates);
      // console.log(values);
      const moeda = values.find((coin) => coin.code === element.currency);
      number *= moeda.ask;
      total += number;
    });
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <h5 data-testid="email-field">
            {email}
          </h5>
          <h3 data-testid="total-field">
            {this.totalValue()}
          </h3>
          <h4 data-testid="header-currency-field">
            BRL
          </h4>
        </header>
        <WalletForm />
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  valor: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
