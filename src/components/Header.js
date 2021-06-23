import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  // função de calculo com ajuda de Fernanda Porto
  calculo(acc, curr) {
    return acc + parseFloat(curr.exchangeRates[curr.currency].ask * curr.value);
  }

  render() {
    const { getEmail, getValues } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ getEmail }</p>
        <p data-testid="total-field">
          {!getValues
            ? 0
            : getValues
              .reduce((acc, curr) => this.calculo(acc, curr), 0)
              .toFixed(2)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getValues: state.wallet.expenses,
});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getValues: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
