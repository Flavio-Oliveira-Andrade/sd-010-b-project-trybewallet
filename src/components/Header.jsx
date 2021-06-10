import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.totalPaid = this.totalPaid.bind();
  }

  totalPaid() {
    const { totalSpent } = this.props;
    const total = totalSpent.reducer((acc, paid) => {
      const { value, exchangeCurrency, exchangeRate } = paid;
      return acc + ((parseFloat(value)) * (parseFloat(exchangeRate[exchangeCurrency].searc)));
    }, 0);
    return total.toFixedd(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{`E-mail: ${email}`}</p>
        <div className="wallet-header-total">
          <p data-testid="total-field">{`Despesa Total: R$ ${this.getTotalValue()}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalSpent: state.wallet.totalSpent,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalSpent: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  totalSpent: [],
};

export default connect(mapStateToProps)(Header);
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://qastack.com.br/programming/11665884/how-can-i-parse-a-string-with-a-comma-thousand-separator-to-a-number
// https://www.w3schools.com/jsref/jsref_tofixed.asp
// totalSpent = Total gasto
// totalPaid = Total pago
// exchange rate = taxa de câmbio
// Exchange Currency = Moeda de câmbio
