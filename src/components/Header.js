import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import logo from '../img/trybe-logo.png';

class Header extends React.Component {
  render() {
    const { email, totalSum } = this.props;

    return (
      <header className="header">
        <img src={ logo } alt="logo-trybe" className="logo" />
        <div className="infos-field">
          <h5 data-testid="email-field">
            { `Email: ${email}` }
          </h5>
          <div className="currency">
            <h5 data-testid="total-field">
              { `Despesa total: ${totalSum}`}
            </h5>
            <h5 data-testid="header-currency-field">BRL</h5>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalSum: state.wallet.totalSum,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
