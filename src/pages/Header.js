import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Wallet.css';

class Header extends React.Component {
  render() {
    const { lerEmail } = this.props;
    return (
      <header>
        <div>TrybeWallet</div>
        <div className="flex">
          <p>Email : </p>
          <p data-testid="email-field">
            {lerEmail}
          </p>
        </div>
        <div className="flex">
          <p>Total : </p>
          <p data-testid="total-field">0</p>
        </div>
        <div className="flex">
          <p>Moeda : </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  lerEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  lerEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
