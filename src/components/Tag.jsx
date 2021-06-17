import React, { Component } from 'react';

class Tag extends Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag:
        {' '}
        <select id="tag">
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

export default Tag;
