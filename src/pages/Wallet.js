import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { emailValidate } from '../actions';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Table />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  checkEmail: ({ target: { value } }) => dispatch(emailValidate(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
