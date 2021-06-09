import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div className="user-info">
          <span>Email:</span>
          <span data-testid="email-field">{ email }</span>
        </div>
        <div className="user-expenses">
          <span>Despesa Total: </span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
