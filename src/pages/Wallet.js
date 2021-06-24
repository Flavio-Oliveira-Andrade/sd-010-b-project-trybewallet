import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWallet from '../components/formWallet';

function Wallet(props) {
  const despesa = useState(0);

  const { email } = props;
  return (
    <div>
      <header>
        <p data-testid="email-field">
          Email:
          { email }
        </p>
        <p data-testid="total-field">
          Despesa:
          { ` ${despesa}` }
        </p>
        <p data-testid="header-currency-field">
          Câmbio: BRL
        </p>
      </header>
      <FormWallet />
    </div>
  );
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
