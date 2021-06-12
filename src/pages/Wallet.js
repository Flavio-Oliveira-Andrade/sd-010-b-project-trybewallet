import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormExpenses from '../components/FormExpenses';

class Wallet extends React.Component {
  render() {
    const { user: { email } } = this.props;
    return (
      <>
        <div>TrybeWallet</div>
        <header>
          <div data-testid="email-field">{ email }</div>
        </header>
        <p>Despesa total:</p>
        <p data-testid="total-field">0</p>

        <p>Campo:</p>
        <p data-testid="header-currency-field">BRL</p>

        <FormExpenses />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Wallet.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Wallet);
