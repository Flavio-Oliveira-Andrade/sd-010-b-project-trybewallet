import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getDataThunk, getCurrencieData } from '../actions/apiRequests';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData().then(() => {
      const { fetchCurrency, data } = this.props;
      fetchCurrency(data);
    });
  }

  render() {
    const { notfoundError } = this.props;
    if (notfoundError) return <Redirect to="/notfound" />;
    return (
      <section>
        <Header />
        <Form />
        <Table disable={ false } />
      </section>
    );
  }
}

Wallet.propTypes = {
  notfoundError: PropTypes.bool,
  data: PropTypes.shape(Object),
};

Wallet.defaultProps = {
  notfoundError: false,
  data: PropTypes.shape(Object),
};

Wallet.propTypes = {
  fetchData: PropTypes.func.isRequired,
  fetchCurrency: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.wallet.loading,
  data: state.wallet.data,
  notfoundError: state.wallet.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getDataThunk()),
  fetchCurrency: (data) => dispatch(getCurrencieData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
