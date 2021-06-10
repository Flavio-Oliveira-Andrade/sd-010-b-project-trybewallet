import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <main>
        <header>
          <h3 data-testid="email-field">
            Email:
            { email }
          </h3>
          <h3 data-testid="total-field">
            Despesa Total:
            { 0 }
          </h3>
          <h3 data-testid="header-currency-field">
            Câmbio em uso:
            BRL
          </h3>
        </header>
        <form>
          <label htmlFor="wallet-value">
            Valor:
            <input type="number" name="value" id="wallet-value" />
          </label>
          <label htmlFor="wallet-description">
            Descrição:
            <input type="text" name="description" id="wallet-description" />
          </label>
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
