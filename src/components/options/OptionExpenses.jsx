import React from 'react';

class OptionExpenses extends React.Component {
  render() {
    return (
      <>
        <option selected>-</option>
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </>
    );
  }
}

export default OptionExpenses;
