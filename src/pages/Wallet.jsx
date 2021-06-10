import React from 'react';
import { connect } from 'react-redux';
import PaymentMethod from '../components/PaymentMethod';
import SelectCurr from '../components/SelectCurr';
import Tag from '../components/Tag';

import './Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.renderInputs = this.renderInputs.bind(this);
  }

  renderInputs(labelid, text, type, name) {
    return (
      <label htmlFor={ labelid }>
        {text}
        <input id={ labelid } type={ type } name={ name } />
      </label>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header data-testid="email-field">
          {email}
          <div className="info--currencie">
            <span data-testid="total-field">Total de gastos: 0</span>
            <span data-testid="header-currency-field">R$BRL</span>
          </div>
        </header>
        <form>
          {this.renderInputs('valor', 'Valor:', 'text', 'valor')}
          {this.renderInputs('descrição', 'Descrição', 'text', 'descrição')}
          <SelectCurr />
          <Tag />
          <PaymentMethod />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
