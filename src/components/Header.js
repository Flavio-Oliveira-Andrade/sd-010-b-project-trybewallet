import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// function NomeFunction({ sendAction, calback }) { // Se for usar Redux
function Header({ userLogin }) {
  return (
    <div>
      <header className="header-wallet">
        <span
          data-testid="email-field"
        >
          E-mail:
          {' '}
          { userLogin }
        </span>
        <span
          data-testid="total-field"
          name="despesa"
        >
          0
        </span>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userLogin: state.user.email,
});

Header.propTypes = {
  userLogin: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
