import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { action } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);

    this.state = {
      email: '',
      password: '',
      button: true,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { email, password } = this.state;
    const passwordMin = 5;
    this.setState({
      [name]: value,
    });
    if (this.validateEmail(email) && (password.length >= passwordMin)) {
      this.setState({
        button: false,
      });
    } else {
      this.setState({
        button: true,
      });
    }
  }

  validateEmail(email) {
    const resultado = /\S+@\S+\.\S+/;
    return resultado.test(email);
  }

  render() {
    const { handleChange } = this;
    const { email, password, button } = this.state;
    const { login } = this.props;
    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ handleChange }
          />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ handleChange }
          />
          <div>
            <Link to="/carteira">
              <button
                type="button"
                disabled={ button }
                onClick={ () => { login({ email }); } }
              >
                Entrar
              </button>
            </Link>

          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (event) => dispatch(action(event)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
