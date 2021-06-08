import React from 'react';
import { connect } from 'react-redux';
import './Login.css';
import { Redirect } from 'react-router-dom';
import Wallet from './Wallet';
import bitcoin from '../images/5a105381eed609b127ec423c337f64e3.gif';

class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: '',
  //   };
  // }

  render() {
    return (
      <div id="login--div">
        <img
          src={ bitcoin }
          alt="bitcoin"
        />
        <form className="login--form">
          <input
            data-testid="email-input"
            type="email"
            placeholder="Email"
            value={ user }
          />
          <input
            data-testid="password-input"
            type="password"
            placeholder="Password"
          />
          <button
            type="button"
            className="login--button"
            onClick={ () => <Redirect to="/carteira" component={ Wallet } /> }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer,
  wallet: state.walletReducer,
});

export default connect(mapStateToProps, null)(Login);
