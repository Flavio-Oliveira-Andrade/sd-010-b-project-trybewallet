import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaWallet, FaEnvelope, FaLock } from 'react-icons/fa';
import trybeLogo from '../files/images/trybe-logo.png';

class FormsLogin extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <>
        <div className="headerLogin">
          <img src={ trybeLogo } alt="logotipo trybe" />
          <div className="walletLogin">
            <FaWallet className="wallet" />
            <h3>Wallet</h3>
          </div>
        </div>
        <h2>Acesse sua Carteira</h2>
        <div className="areaInputs">
          <div className="inputEmail">
            <FaEnvelope className="iconInput" />
            <input
              name="email"
              placeholder="Insira seu e-mail"
              onChange={ handleChange }
              data-testid="email-input"
            />
          </div>
          <div className="inputPwd">
            <FaLock className="iconInput" />
            <input
              type="password"
              name="password"
              placeholder="Insira sua senha de 6 dígitos"
              onChange={ handleChange }
              data-testid="password-input"
            />
          </div>
        </div>
      </>
    );
  }
}

FormsLogin.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user: { email, password } }) => ({
  email,
  password,
});

export default connect(mapStateToProps)(FormsLogin);
