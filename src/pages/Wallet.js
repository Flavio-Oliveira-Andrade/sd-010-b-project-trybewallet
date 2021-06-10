import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import trybeWallet from '../files/images/trybe-wallet.png';
// import FormsWallet from '../components/FormsWallet';

class Wallet extends React.Component {
  render() {
    const { email, totalExpenses } = this.props;
    console.log(email);
    return (
      <div className="walletPage">
        <div className="walletHeader">
          <img src={ trybeWallet } alt="imagem trybe" />
          <div className="email_totalExpenses">
            <p data-testid="email-field">{`E-mail: ${email}` }</p>
            <p data-testid="total-field">
              {`Despesa Total: R$ ${totalExpenses}`}
            </p>
            <p data-testid="header-currency-field">
              BRL
            </p>
          </div>
          <div className="walletForms">
            {/* <FormsWallet /> */}
          </div>
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

const mapStateToProps = ({ user: { email }, wallet: { totalExpenses } }) => ({
  email,
  totalExpenses,
});

export default connect(mapStateToProps)(Wallet);
