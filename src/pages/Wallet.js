import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FormDespesa from '../components/Despesa';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
    this.updateId = this.updateId.bind(this);
  }

  updateId() {
    this.setState((prev) => ({ id: prev.id + 1 }));
  }

  render() {
    const { id } = this.state;

    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <FormDespesa
            id={ id }
            updateId={ this.updateId }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editing: state.wallet.editing,
});

export default connect(mapStateToProps)(Wallet);
