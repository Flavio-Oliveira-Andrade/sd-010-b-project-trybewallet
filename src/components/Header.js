import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalExpenses: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { totalExpenses, currency } = this.state;
    const { email } = this.props;
    console.log(email);
    return (
      <div>
        <h4 data-testid="email-field">{`Usuário: ${email}`}</h4>
        <h3 data-testid="total-field">{`Total de despesas: ${totalExpenses}`}</h3>
        <h3 data-testid="header-currency-field">{`Moeda correntre: ${currency}`}</h3>
      </div>
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
