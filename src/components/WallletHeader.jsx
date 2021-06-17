import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  sumValues() {
    const { values } = this.props;
    const total = values.reduce((acc, curr) => {
      const rate = curr.exchangeRates[curr.currency].ask;
      return acc + curr.value * rate;
    }, 0);
    return total;
  }

  render() {
    const { email } = this.props;
    return (
      <header data-testid="email-field">
        {email}
        <div className="info--currencie">
          <span data-testid="header-currency-field">R$BRL</span>
          <span data-testid="total-field">
            Total de gastos:
            { this.sumValues() }
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  values: state.wallet.expenses,
});

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps)(WalletHeader);
