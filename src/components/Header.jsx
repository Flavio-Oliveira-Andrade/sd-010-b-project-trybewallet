import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Form';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ userEmail }</p>
        <label htmlFor="input-despesa-total">
          Despesas totais:
          <input
            name="input-despesa-total"
            type="number"
            value="0"
            data-testid="total-field"
          />
        </label>
        <label htmlFor="actual-currency">
          Moeda atual:
          <select name="actual-currency" data-testid="header-currency-field">
            <option value="BRL">BRL</option>
          </select>
        </label>
        <Form />
      </header>
    )
  }
}

Header.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);
