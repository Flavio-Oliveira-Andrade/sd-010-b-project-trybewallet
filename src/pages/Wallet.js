import React, { useState } from 'react';
import { connect } from 'react-redux';

function Wallet(props) {
  const [despesa, setDespesa] = useState(0);

  const { email } = props;
  return (
    <div>
      <header>
        <form>
          <p data-testid="email-field">
            Email:
            { email }
          </p>
          <p data-testid="total-field">
            Despesa:
            { ` ${despesa}` }
          </p>
          <p data-testid="header-currency-field">
            Câmbio: BRL
          </p>
        </form>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
