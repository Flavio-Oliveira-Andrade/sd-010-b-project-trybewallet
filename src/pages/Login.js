import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addLogin } from '../actions';
import FormsLogin from '../components/FormsLogin';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabledBtn: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validationEmailPwd = this.validationEmailPwd.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    }, () => {
      this.validationEmailPwd();
    });
  }

  validationEmailPwd() {
    const { email, password } = this.state;
    const regex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i; // regex fonte: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail / http://www.regexplained.co.uk/
    const Email = regex.test(email);
    const Password = password.length;
    const minPwd = 6;

    if (Email && Password >= minPwd) {
      this.setState({
        disabledBtn: false,
      });
    } else {
      this.setState({
        disabledBtn: true,
      });
    }
  }

  render() {
    const { email, password, disabledBtn } = this.state;
    const { addEmailPassword } = this.props;
    return (
      <div className="Login">
        <FormsLogin handleChange={ this.handleChange } />
        <div className="areaButtonsLogin">
          <Link to="/carteira">
            <button
              type="button"
              disabled={ disabledBtn }
              className={ (disabledBtn) ? 'enterBtnLogin-color' : 'enterBtnLogin' }
              onClick={ () => addEmailPassword(email, password) }
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  addEmailPassword: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispatch) => ({
  addEmailPassword: (email, password) => dispatch(
    addLogin(email, password),
  ),
});

export default connect(null, mapDispathToProps)(Login);
