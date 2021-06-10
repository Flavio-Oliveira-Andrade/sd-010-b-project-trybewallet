import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDataThunk } from '../actions/apiRequests';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
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
      </section>
    );
  }
}

Wallet.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.wallet.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getDataThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
