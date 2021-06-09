import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDataThunk } from '../actions/apiRequests';
import Header from '../components/Header';
// import { exchangeAPI } from '../services/api';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return (
      <section>
        <Header />
        <Form />
        <Table />
      </section>);
  }
}

Wallet.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getDataThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);
