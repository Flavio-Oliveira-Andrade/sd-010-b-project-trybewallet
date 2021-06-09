import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { total, currency } = this.state;
    return (
      <div>
        {/* image-logo */}
        <h3 data-testid="email-field">{ email }</h3>
        <h3 data-testid="total-field">{ `Valor total: ${total}` }</h3>
        <h3 data-testid="header-currency-field">{ currency }</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
