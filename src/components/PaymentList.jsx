import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PaymentList extends Component {
  constructor(props) {
    super(props);

    this.structure = this.structure.bind(this);
  }

  structure() {
    return (
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
    );
  }

  render() {
    const { expensesLabel } = this.props;
    return (
      <table>
        {this.structure()}
        <tbody>
          {
            expensesLabel.map((item, index) => {
              const exchange = item.exchangeRates[item.currency];
              const name = exchange.name.split('/')[0];
              const currency = exchange.ask;
              const value = parseFloat(currency).toFixed(2);
              const real = parseFloat(item.value * currency).toFixed(2);
              console.log(real);
              return (
                <tr key={ index }>
                  <td>{ item.description }</td>
                  <td>{ item.tag }</td>
                  <td>{ item.method }</td>
                  <td>{ item.value }</td>
                  <td>{ name }</td>
                  <td>{ value }</td>
                  <td>{ real }</td>
                  <td>Real</td>
                  <td>
                    <button data-testid="delete-btn" type="button">Deletar</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesLabel: state.wallet.expenses,
});

PaymentList.propTypes = ({
  expensesLabel: PropTypes.shape,
}).isRequired;

export default connect(mapStateToProps)(PaymentList);
