import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // valor: '0',
      // descricao: '',
      moeda: '',
      pagamento: 'dinheiro',
      tag: 'alimentacao',
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCoin = this.renderCoin.bind(this);
    this.renderPayment = this.renderPayment.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  renderValue(handleChange) {
    return (
      <label htmlFor="valor">
        Valor
        <input type="number" name="valor" id="valor" onChange={ handleChange } />
      </label>
    );
  }

  renderDescription(handleChange) {
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          name="descricao"
          id="descricao"
          onChange={ handleChange }
        />
      </label>
    );
  }

  renderCoin(moeda, handleChange) {
    return (
      <label htmlFor="moeda">
        Moeda
        <select
          name="moeda"
          value={ moeda }
          id="moeda"
          onChange={ handleChange }
        >
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderPayment(pagamento, handleChange) {
    return (
      <label htmlFor="pagamento">
        Método de pagamento
        <select
          name="pagamento"
          id="pagamento"
          value={ pagamento }
          onChange={ handleChange }
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag(tag, handleChange) {
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          value={ tag }
          onChange={ handleChange }
        >
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { moeda, pagamento, tag } = this.state;
    return (
      <form>
        { this.renderValue(this.handleChange) }
        <br />
        { this.renderDescription(this.handleChange) }
        <br />
        { this.renderCoin(moeda, this.handleChange) }
        <br />
        { this.renderPayment(pagamento, this.handleChange) }
        <br />
        { this.renderTag(tag, this.handleChange) }
        <input type="submit" value="Enviar" />

      </form>
    );
  }
}

export default Form;
