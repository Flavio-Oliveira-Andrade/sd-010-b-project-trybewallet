import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/Header.css';

import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userData } = this.props;

    return (
      <header>
        <div className="right-side">
          <h1>VanelliWallet</h1>
        </div>
        <div className="left-side">
          <p data-testid="email-field">
            Email:
            { userData }
          </p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userData: PropTypes.string.isRequired,
};
