import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <h1>TRYBEWALLET</h1>
        <h2 data-testid="email-field">{ user || 'name'}</h2>
        <h2 data-testid="total-field">0</h2>
        <h2 data-testid="header-currency-field">BRL</h2>

      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string,
}.isRequired;
const mapStateToProps = (state) => ({
  user: state.user.email,
});

export default connect(mapStateToProps)(Header);
