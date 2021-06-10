import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailUser: { email } } = this.props;
    return (
      <header>
        <div className="Header">
          <p data-testid="email-field">
            Email:
            { email }
          </p>
          <div>
            Despesa Total:
            <p data-testid="total-field">0</p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user,
});

Wallet.propTypes = {
  emailUser: PropTypes.objectOf({
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://qastack.com.br/programming/11665884/how-can-i-parse-a-string-with-a-comma-thousand-separator-to-a-number
// https://www.w3schools.com/jsref/jsref_tofixed.asp
// totalSpent = Total gasto
// totalPaid = Total pago
// exchange rate = taxa de câmbio
// Exchange Currency = Moeda de câmbio
