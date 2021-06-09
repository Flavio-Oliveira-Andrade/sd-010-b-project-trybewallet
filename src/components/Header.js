import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { emailLogin } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ emailLogin }</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  emailLogin: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailLogin: state.user.email,
});

export default connect(mapStateToProps)(Header);
