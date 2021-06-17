import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user, total } = this.props;
    return (
      <header>
        <p data-testid="email-field">{`Usuário: ${user}`}</p>
        <p>{`Valor total: ${total}`}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  total: state.wallet.total,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
