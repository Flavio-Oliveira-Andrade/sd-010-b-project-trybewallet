import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, total = 0 } = this.props; // ficar de olho aqui !
    return (
      <header>
        <div>
          <h1 data-testid="email-field">{ email }</h1>
          <h2 data-testid="total-field">{ total }</h2>
          <h2 data-testid="header-currency-field">BRL</h2>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
