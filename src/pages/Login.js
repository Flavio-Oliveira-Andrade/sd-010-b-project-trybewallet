import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setLogin } from '../actions';
import { formsLogin } from '../services/createForms/formChildrens';
import ElementsForm from '../services/createForms/generator';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handle = this.handle.bind(this);
  }

  handle({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  render() {
    const { setEmail, loading } = this.props;
    const { email, password } = this.state;
    const maxLength = 6;
    const isValid = email.match(/((\w+)@(\w+)\.(\w+))/i) && password.length >= maxLength;
    if (loading) return <Redirect to="/carteira" />;
    return (
      <form>
        <ElementsForm forms={ formsLogin(this.state, this.handle) } />
        <button type="button" disabled={ !isValid } onClick={ () => setEmail(email) }>
          Entrar
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  setEmail: (login) => dispatch(setLogin(login)),
});

Login.propTypes = {
  loading: PropTypes.bool,
  setEmail: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
