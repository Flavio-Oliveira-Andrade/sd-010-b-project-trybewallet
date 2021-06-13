import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header className="general-header">
        <section className="section-header">
          <div className="user-email"><h2 data-testid="email-field">{ email }</h2></div>
          <div className="user-total">
            <span data-testid="total-field">0</span>
            <span> </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
