import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FormDespesa from '../components/FormDespesa';
import './Wallet.css';
import Tabela from '../components/Tabela';
import EditaDespesa from '../components/EditaDespesa';

class Wallet extends React.Component {
  render() {
    const { editing } = this.props;

    return (
      <div className="wallet">
        <div>
          <Header />
        </div>
        <div className="form-despesa">
          { !editing ? <FormDespesa /> : <EditaDespesa /> }
        </div>
        <Tabela />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editing: state.wallet.editing,
});

Wallet.propTypes = {
  editing: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Wallet);
